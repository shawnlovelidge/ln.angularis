import {
  Expression,
  ModifierLike,
  ModifiersArray,
  NodeArray,
  ParameterDeclaration,
  PropertyName,
  SyntaxKind,
  TypeNode,
} from 'typescript';
//
// Models
//
import { Property } from './property';
import { Method } from './method';
import { Parameter } from './parameter';
import { Initializer } from './initializer';
import { Modifier } from './modifier';
import { SchematicContext } from '@angular-devkit/schematics';

//
// IPropertyToken
//
export interface IPropertyToken {
  name: PropertyName;
  type: TypeNode | undefined;
  initializer: Expression | undefined;
  modifiers: NodeArray<ModifierLike> | undefined;
}
//
// ModuleToken Interface
//
export interface IModuleToken {
  class?: string;
  properties: Array<IPropertyToken>;
  methods: Array<{
    name: PropertyName;
    parameters: NodeArray<ParameterDeclaration>;
  }>;
}
//
// ModuleToken
//
export class ModuleToken implements IModuleToken {
  //
  // Properties
  //
  public class?: string;
  public properties: Array<IPropertyToken> = [];
  public methods: Array<{
    name: PropertyName;
    kind: SyntaxKind;
    parameters: NodeArray<ParameterDeclaration>;
  }> = [];
  //
  // Constructor
  //
  constructor() {}
  //
  // getProperties
  //
  public getProperties(): Array<Property> {
    return this.properties.map(
      (property: IPropertyToken) =>
        new Property(
          property.name.getText(),
          property.type?.kind ?? 0,
          new Initializer(
            property.initializer?.getText() ?? '',
            property.initializer?.kind ?? 0
          ),
          property.modifiers?.map(modifier => new Modifier(modifier.kind))
        )
    );
  }
  //
  // getMethods
  //
  public getMethods(): Array<Method> {
    return this.methods.map(
      (method: {
        name: PropertyName;
        kind: SyntaxKind;
        parameters: NodeArray<ParameterDeclaration>;
      }) => {
        const name: string = method.name.getText();
        const kind: SyntaxKind = method.kind ?? 0;
        const parameters: Parameter[] = method.parameters.map(
          param => new Parameter(param.name.getText(), param.type?.kind ?? 0)
        );

        return new Method(name, kind, parameters);
      }
    );
  }

  //
  // toString
  //
  public print(context: SchematicContext): void {
    context.logger.info(`\Class: '${this.class}'\n`);
    context.logger.info(`\Properties(s):\n`);
    this.getProperties().forEach(property => {
      property.modifiers.forEach(modifier => {
        context.logger.info(
          `${modifier.type}\t${property.name}: ${property.type} = ${property.initializer?.name} (${property.initializer?.type})\r`
        );
      });
    });

    context.logger.info(`\nMethod(s):\n`);
    this.getMethods().forEach(method => {
      context.logger.info(
        `${method.name}(${method.parameters.length ? '...' : ''})\n`
      );
      if (method.parameters.length > 0) {
        method.parameters.forEach(parameter => {
          context.logger.info(`\t${parameter.name} Type: ${parameter.type}\r`);
        });
      }
    });
    context.logger.info(`\n`);
  }
}
