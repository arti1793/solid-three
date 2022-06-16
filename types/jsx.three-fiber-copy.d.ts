import { Ref } from "solid-js";
import * as THREE from "three";
import { Object3D, Vector3Tuple } from "three";
// import { EventHandlers } from "./core/events";
// import { AttachType } from "./core/renderer";

export type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
export type Overwrite<T, O> = Omit<T, NonFunctionKeys<O>> & O;

/**
 * If **T** contains a constructor, @see ConstructorParameters must be used, otherwise **T**.
 */
type Args<T> = T extends new (...args: any) => any
  ? ConstructorParameters<T>
  : T;

export type Euler = THREE.Euler | Parameters<THREE.Euler["set"]>;
export type Matrix4 = THREE.Matrix4 | Parameters<THREE.Matrix4["set"]>;
export type Vector2 =
  | THREE.Vector2
  | Parameters<THREE.Vector2["set"]>
  | Parameters<THREE.Vector2["setScalar"]>[0];
export type Vector3 =
  | THREE.Vector3
  | Parameters<THREE.Vector3["set"]>
  | Parameters<THREE.Vector3["setScalar"]>[0];
export type Vector4 =
  | THREE.Vector4
  | Parameters<THREE.Vector4["set"]>
  | Parameters<THREE.Vector4["setScalar"]>[0];
export type Color =
  | ConstructorParameters<typeof THREE.Color>
  | THREE.Color
  | number
  | string; // Parameters<T> will not work here because of multiple function signatures in three.js types
export type ColorArray = typeof THREE.Color | Parameters<THREE.Color["set"]>;
export type Layers = THREE.Layers | Parameters<THREE.Layers["set"]>[0];
export type Quaternion = THREE.Quaternion | Parameters<THREE.Quaternion["set"]>;

export type AttachCallback =
  | string
  | ((child: any, parentInstance: any) => void);

export interface NodeProps<T, P> {
  /** Constructor arguments */
  children?: JSX.Element;
  ref?: Ref<T>;
}

export type ExtendedColors<T> = {
  [K in keyof T]: T[K] extends THREE.Color | undefined ? Color : T[K];
};
export type Node<T, P> = ExtendedColors<Overwrite<Partial<T>, NodeProps<T, P>>>;

export type Object3DNode<T, P> = Overwrite<
  Node<T, P>,
  {
    position?: Vector3Tuple;
    up?: Vector3;
    scale?: Vector3;
    rotation?: Vector3Tuple;
    matrix?: Matrix4;
    quaternion?: Quaternion;
    layers?: Layers;
    dispose?: (() => void) | null;
  }
>; /**&
  EventHandlers;**/

export type LightNode<T extends THREE.Light, P> = Object3DNode<T, P>;

export type Object3DProps = Object3DNode<THREE.Object3D, typeof THREE.Object3D>;
// export type AudioProps = Object3DNode<THREE.Audio, typeof THREE.Audio>
export type AudioListenerProps = Object3DNode<
  THREE.AudioListener,
  typeof THREE.AudioListener
>;
export type PositionalAudioProps = Object3DNode<
  THREE.PositionalAudio,
  typeof THREE.PositionalAudio
>;

export type MeshProps = Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
export type InstancedMeshProps = Object3DNode<
  THREE.InstancedMesh,
  typeof THREE.InstancedMesh
>;
export type SceneProps = Object3DNode<THREE.Scene, typeof THREE.Scene>;
export type SpriteProps = Object3DNode<THREE.Sprite, typeof THREE.Sprite>;
export type LODProps = Object3DNode<THREE.LOD, typeof THREE.LOD>;
export type SkinnedMeshProps = Object3DNode<
  THREE.SkinnedMesh,
  typeof THREE.SkinnedMesh
>;

export type SkeletonProps = Object3DNode<THREE.Skeleton, typeof THREE.Skeleton>;
export type BoneProps = Object3DNode<THREE.Bone, typeof THREE.Bone>;
export type LineSegmentsProps = Object3DNode<
  THREE.LineSegments,
  typeof THREE.LineSegments
>;
export type LineLoopProps = Object3DNode<THREE.LineLoop, typeof THREE.LineLoop>;
// export type LineProps = Object3DNode<THREE.Line, typeof THREE.Line>
export type PointsProps = Object3DNode<THREE.Points, typeof THREE.Points>;
export type GroupProps = Object3DNode<THREE.Group, typeof THREE.Group>;

export type CameraProps = Object3DNode<THREE.Camera, typeof THREE.Camera>;
export type PerspectiveCameraProps = Object3DNode<
  THREE.PerspectiveCamera,
  typeof THREE.PerspectiveCamera
>;
export type OrthographicCameraProps = Object3DNode<
  THREE.OrthographicCamera,
  typeof THREE.OrthographicCamera
>;
export type CubeCameraProps = Object3DNode<
  THREE.CubeCamera,
  typeof THREE.CubeCamera
>;
export type ArrayCameraProps = Object3DNode<
  THREE.ArrayCamera,
  typeof THREE.ArrayCamera
>;

export type PrimitiveProps = { object: any } & { [properties: string]: any };

export type LightProps = LightNode<THREE.Light, typeof THREE.Light>;
export type SpotLightShadowProps = Node<
  THREE.SpotLightShadow,
  typeof THREE.SpotLightShadow
>;
export type SpotLightProps = LightNode<THREE.SpotLight, typeof THREE.SpotLight>;
export type PointLightProps = LightNode<
  THREE.PointLight,
  typeof THREE.PointLight
>;
export type RectAreaLightProps = LightNode<
  THREE.RectAreaLight,
  typeof THREE.RectAreaLight
>;
export type HemisphereLightProps = LightNode<
  THREE.HemisphereLight,
  typeof THREE.HemisphereLight
>;
export type DirectionalLightShadowProps = Node<
  THREE.DirectionalLightShadow,
  typeof THREE.DirectionalLightShadow
>;
export type DirectionalLightProps = LightNode<
  THREE.DirectionalLight,
  typeof THREE.DirectionalLight
>;
export type AmbientLightProps = LightNode<
  THREE.AmbientLight,
  typeof THREE.AmbientLight
>;
export type LightShadowProps = Node<
  THREE.LightShadow,
  typeof THREE.LightShadow
>;
export type AmbientLightProbeProps = LightNode<
  THREE.AmbientLightProbe,
  typeof THREE.AmbientLightProbe
>;
export type HemisphereLightProbeProps = LightNode<
  THREE.HemisphereLightProbe,
  typeof THREE.HemisphereLightProbe
>;
export type LightProbeProps = LightNode<
  THREE.LightProbe,
  typeof THREE.LightProbe
>;

export type SpotLightHelperProps = Object3DNode<
  THREE.SpotLightHelper,
  typeof THREE.SpotLightHelper
>;
export type SkeletonHelperProps = Object3DNode<
  THREE.SkeletonHelper,
  typeof THREE.SkeletonHelper
>;
export type PointLightHelperProps = Object3DNode<
  THREE.PointLightHelper,
  typeof THREE.PointLightHelper
>;
export type HemisphereLightHelperProps = Object3DNode<
  THREE.HemisphereLightHelper,
  typeof THREE.HemisphereLightHelper
>;
export type GridHelperProps = Object3DNode<
  THREE.GridHelper,
  typeof THREE.GridHelper
>;
export type PolarGridHelperProps = Object3DNode<
  THREE.PolarGridHelper,
  typeof THREE.PolarGridHelper
>;
export type DirectionalLightHelperProps = Object3DNode<
  THREE.DirectionalLightHelper,
  typeof THREE.DirectionalLightHelper
>;
export type CameraHelperProps = Object3DNode<
  THREE.CameraHelper,
  typeof THREE.CameraHelper
>;
export type BoxHelperProps = Object3DNode<
  THREE.BoxHelper,
  typeof THREE.BoxHelper
>;
export type Box3HelperProps = Object3DNode<
  THREE.Box3Helper,
  typeof THREE.Box3Helper
>;
export type PlaneHelperProps = Object3DNode<
  THREE.PlaneHelper,
  typeof THREE.PlaneHelper
>;
export type ArrowHelperProps = Object3DNode<
  THREE.ArrowHelper,
  typeof THREE.ArrowHelper
>;
export type AxesHelperProps = Object3DNode<
  THREE.AxesHelper,
  typeof THREE.AxesHelper
>;

export type TextureProps = Node<THREE.Texture, typeof THREE.Texture>;
export type VideoTextureProps = Node<
  THREE.VideoTexture,
  typeof THREE.VideoTexture
>;
export type DataTextureProps = Node<
  THREE.DataTexture,
  typeof THREE.DataTexture
>;

export type CompressedTextureProps = Node<
  THREE.CompressedTexture,
  typeof THREE.CompressedTexture
>;
export type CubeTextureProps = Node<
  THREE.CubeTexture,
  typeof THREE.CubeTexture
>;
export type CanvasTextureProps = Node<
  THREE.CanvasTexture,
  typeof THREE.CanvasTexture
>;
export type DepthTextureProps = Node<
  THREE.DepthTexture,
  typeof THREE.DepthTexture
>;

declare global {
  namespace JSX {
    type Element = Object3D;
    interface IntrinsicElements {
      object3D: Object3DProps;

      // `audio` works but conflicts with @types/react. Try using Audio from react-three-fiber/components instead
      // audio: AudioProps
      audioListener: AudioListenerProps;
      positionalAudio: PositionalAudioProps;

      mesh: MeshProps;
      instancedMesh: InstancedMeshProps;
      scene: SceneProps;
      sprite: SpriteProps;
      lOD: LODProps;
      skinnedMesh: SkinnedMeshProps;
      skeleton: SkeletonProps;
      bone: BoneProps;
      lineSegments: LineSegmentsProps;
      lineLoop: LineLoopProps;
      // see `audio`
      // line: LineProps
      points: PointsProps;
      group: GroupProps;

      // cameras
      camera: CameraProps;
      perspectiveCamera: PerspectiveCameraProps;
      orthographicCamera: OrthographicCameraProps;
      cubeCamera: CubeCameraProps;
      arrayCamera: ArrayCameraProps;

      // primitive
      primitive: PrimitiveProps;

      // lights and other
      light: LightProps;
      spotLightShadow: SpotLightShadowProps;
      spotLight: SpotLightProps;
      pointLight: PointLightProps;
      rectAreaLight: RectAreaLightProps;
      hemisphereLight: HemisphereLightProps;
      directionalLightShadow: DirectionalLightShadowProps;
      directionalLight: DirectionalLightProps;
      ambientLight: AmbientLightProps;
      lightShadow: LightShadowProps;
      ambientLightProbe: AmbientLightProbeProps;
      hemisphereLightProbe: HemisphereLightProbeProps;
      lightProbe: LightProbeProps;

      // helpers
      spotLightHelper: SpotLightHelperProps;
      skeletonHelper: SkeletonHelperProps;
      pointLightHelper: PointLightHelperProps;
      hemisphereLightHelper: HemisphereLightHelperProps;
      gridHelper: GridHelperProps;
      polarGridHelper: PolarGridHelperProps;
      directionalLightHelper: DirectionalLightHelperProps;
      cameraHelper: CameraHelperProps;
      boxHelper: BoxHelperProps;
      box3Helper: Box3HelperProps;
      planeHelper: PlaneHelperProps;
      arrowHelper: ArrowHelperProps;
      axesHelper: AxesHelperProps;

      // textures
      texture: TextureProps;
      videoTexture: VideoTextureProps;
      dataTexture: DataTextureProps;
      compressedTexture: CompressedTextureProps;
      cubeTexture: CubeTextureProps;
      canvasTexture: CanvasTextureProps;
      depthTexture: DepthTextureProps;
    }
  }
}

export { JSX };
