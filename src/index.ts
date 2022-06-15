import { createRenderer } from "solid-js/universal";
import * as Three from "three";
import { Component as ComponentBase, Ref } from "solid-js";
import type { JSX } from "../types/jsx.three-fiber-copy";
import { Vector3Tuple } from "three";

export type ComponentProps<
  T extends keyof JSX.IntrinsicElements | ComponentBase<any>
> = T extends ComponentBase<infer P>
  ? P
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : {};
export type Component = <P>(props: P) => JSX.Element;

const capitalize = (str: string) => str[0].toUpperCase() + str.substring(1);

export const {
  render,
  effect,
  memo,
  createComponent,
  createElement,
  createTextNode,
  insertNode,
  insert,
  spread,
  setProp,
  mergeProps,
} = createRenderer<JSX.Element>({
  createElement(tag: string) {
    try {
      return new (Three as unknown as any)[capitalize(tag)]();
    } catch (err) {
      console.error(err);
    }
  },
  /**NOTUSED */
  createTextNode(value) {
    return null as unknown as any;
  },
  isTextNode(node) {
    return null as unknown as any;
  },
  replaceText(textNode, value) {},
  /**NOTUSED */

  setProperty(node: JSX.Element, name, value) {
    if (name === "position") {
      node.position.set(...(value as unknown as Vector3Tuple));
      return;
    }
    if (name === "rotation") {
      node.rotation.set(...(value as unknown as Vector3Tuple));
      return;
    }
    if (name === "ref") {
      (value as unknown as (ref: Ref<JSX.Element>) => void)(node);
      return;
    }
    (node as unknown as any)[name] = value;
  },
  insertNode(parent: JSX.Element, node: JSX.Element, anchor) {
    if (!parent || !node) return;
    if (!anchor) {
      return parent.add(node);
    }
    const to = (parent as Three.Object3D).children.findIndex(
      (el) => el === anchor!
    );
    (parent as Three.Object3D).children.splice(to, 0, node);
  },

  removeNode(parent: JSX.Element, node: JSX.Element) {
    parent.remove(node);
  },
  getParentNode(node: JSX.Element) {
    return node.parent!;
  },
  getFirstChild(node: JSX.Element) {
    const [first] = node.children;
    return first;
  },
  getNextSibling(node: JSX.Element) {
    const myIndex = node.parent?.children.findIndex((el) => el === node);
    if (myIndex === -1) return null as unknown as Three.Object3D;
    return (
      node.parent?.children[myIndex! + 1] ?? (null as unknown as Three.Object3D)
    );
  },
});
// Forward Solid control flow
export {
  For,
  Show,
  Suspense,
  SuspenseList,
  Switch,
  Match,
  Index,
  ErrorBoundary,
  createEffect,
} from "solid-js";
