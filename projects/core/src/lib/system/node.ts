import { Library } from '../library';
import { Element } from '../common/element';
import { Guid } from '../common';

/**
 * Print()
 * @param root
 * @constructor
 */
export function Print(root: Node) {
  console.log(
    `\nNode: \t${root.name}[uid: ${root.uid}\tparent: ${root.parentId}]`
  );
}

/**
 * @class Node
 * @description Defines a atag object.
 */
export class Node extends Element {
  public expanded: boolean = false;
  public parentId: number | Guid;
  public children: Array<Node> = [];

  /**
   * find()
   * @param root
   * @param expression
   */
  public find(expression: Function, root: Node = this): Node | undefined {
    let n: Node | undefined = undefined;
    if (Library.isArrayWithLength(root.children)) {
      if (expression(root)) {
        return root;
      } else {
        for (let i = 0; i < root.children.length && Library.isNull(n); i++) {
          n = this.find(expression, root.children[i]);
          if (Library.isObject(n)) {
            break;
          }
        }
      }
    }
    return n;
  }

  /**
   * print()
   * @param root
   * @param print
   */
  public print(print: Function = Print, root: Node = this): void {
    return this.traverse(print, root);
  }

  /**
   * traverse()
   * @param root
   * @param callback
   */
  public traverse(callback: Function, root: Node = this): void {
    if (Library.isDefined(root)) {
      if (Library.isFunction(callback)) {
        callback(root);
      }

      if (root.children.length) {
        for (let i = 0; i < root.children.length; i++) {
          this.traverse(callback, root.children[i]);
        }
      }
    }
  }

  /**
   * remove()
   * @param node
   * @param root
   * @returns {boolean}
   */
  public remove(node: Node, root: Node = this) {
    if (Library.isDefined(root)) {
      //
      // If we are at the node's parent then continue...
      //
      if (root.uid === node.parentId || Library.isUndefined(this.parentId)) {
        //
        // If new Node doesn't exists in the collection of node nodes then...
        //
        if (Library.isObject(node)) {
          //
          // remove All Children of this Child Node
          //
          this._removeChildren(node);
          //
          // remove this child Node
          //
          //pullAllBy(root.children, [node], 'uid');
        }

        return true;
      } else {
        if (root.children.length) {
          for (let i = 0; i < root.children.length; i++) {
            if (this.remove(node, root.children[i])) {
              break;
            }
          }
        }
      }
    }

    return false;
  }

  /**
   * add()
   * @param node
   * @param root
   * @returns {boolean}
   * @constructor
   */
  public add(node: Node, root: Node = this) {
    if (Library.isDefined(root)) {
      if (root.uid === node.parentId) {
        return this._addChild(node, root);
      } else {
        if (root.children.length) {
          for (let i = 0; i < root.children.length; i++) {
            if (this.add(node, root.children[i])) {
              break;
            }
          }
        }
      }
    }

    return false;
  }

  /**
   * update()
   * @param root
   * @param item
   * @constructor
   */
  _update(root: Node, item: Node | undefined) {
    if (item) {
      root.active = item.active;
      root.expanded = item.expanded;
      root.name = item.name;
      root.onClick = item.onClick;
      root.parentId = item.parentId;
      root.routerLink = item.routerLink;
      root.tooltip = item.tooltip;
    }
  }

  /**
   * _addChild()
   * @param node
   * @param root
   * @returns {boolean}
   * @constructor
   */
  private _addChild(node: Node, root: Node = this) {
    if (Library.isDefined(node) && Library.isDefined(root)) {
      //
      // If we have a match on parent id then we need to make sure we
      // are not inserting an identical record into the tree
      //
      const item = root.children.find((c: Node) => {
        return c.uid === node.uid ? c : undefined;
      });

      //
      // If new Node doesn't exists in the collection of node nodes then...
      //
      if (Library.isObject(item)) {
        this._update(root, item);
      } else {
        // root.children.splice(
        //   sortedIndexBy(root.children, node, (x: Node) => {
        //     return x.name;
        //   }),
        //   0,
        //   clone(node)
        // );
      }

      return true;
    }

    return false;
  }

  /**
   * removeChildren
   * @param node
   */
  private _removeChildren(node: Node) {
    if (Library.isDefined(node)) {
      if (node.children.length) {
        for (let i = node.children.length - 1; i > -1; i--) {
          this._removeChildren(node.children[i]);

          //pullAt(node.children, i);
        }
      }
    }
  }

  /**
   * constructor()
   */
  constructor(options?: Partial<Node>) {
    super(options);
    this.expanded = Library.init(options, 'expanded', false);
    this.parentId = Library.init(options, 'parentId');
    this.children = [];
  }
}
