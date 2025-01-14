import { Injectable } from '@angular/core';
import { Node } from '@angularis/core';

export interface INodeService {
  Traverse(node: Node, level: number, onvisit: Function): void;
}

@Injectable()
export class AgNodeService implements INodeService {
  /**
   * Traverse
   */
  public Traverse(node: Node, level: number, onvisit: Function): void {
    return this.onTraverse(node, level, onvisit);
  }
  /**
   * onTraverse()
   */
  private onTraverse(node: Node, level: number, onvisit: Function): void {
    if (node) {
      if (onvisit) {
        onvisit(node, level);
      }

      if (node.children) {
        for (const child of node.children) {
          this.onTraverse(child, level + 1, onvisit);
        }
      }
    }
  }
}
