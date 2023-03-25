// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bvkZrMdCandYGyPCH1rh27
// Component: HNgDlL26I3VQo
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 8Gj1GZbvcl1-2/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_commerce_storefront.module.css"; // plasmic-import: bvkZrMdCandYGyPCH1rh27/projectcss
import sty from "./PlasmicValue.module.css"; // plasmic-import: HNgDlL26I3VQo/css
import TakeOffIcon from "./icons/PlasmicIcon__TakeOff"; // plasmic-import: VbXImnk6jpE51k/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: eB1cOW98y_DFih/icon

export const PlasmicValue__VariantProps = new Array(
  "topBottom",
  "center",
  "withButton"
);

export const PlasmicValue__ArgProps = new Array(
  "children",
  "icon",
  "children2"
);

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicValue__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "topBottom",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.topBottom
      },
      {
        path: "center",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.center
      },
      {
        path: "withButton",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.withButton
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcenter]: hasVariant($state, "center", "center"),
          [sty.roottopBottom]: hasVariant($state, "topBottom", "topBottom"),
          [sty.rootwithButton]: hasVariant($state, "withButton", "withButton")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__yFo5D, {
          [sty.freeBoxcenter__yFo5Dz8GsX]: hasVariant(
            $state,
            "center",
            "center"
          ),

          [sty.freeBoxtopBottom__yFo5DlrEdC]: hasVariant(
            $state,
            "topBottom",
            "topBottom"
          )
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox__iRxVc)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <TakeOffIcon
                className={classNames(projectcss.all, sty.svg__b8YVv)}
                role={"img"}
              />
            ),

            value: args.icon
          })}
        </div>
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___5MaOo, {
          [sty.freeBoxcenter___5MaOOz8GsX]: hasVariant(
            $state,
            "center",
            "center"
          ),

          [sty.freeBoxwithButton___5MaOOh7BQ]: hasVariant(
            $state,
            "withButton",
            "withButton"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xWiW7
                )}
              >
                {"Worldwide Shipping"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__du6Ay
                )}
              >
                {"Special financing and earn rewards."}
              </div>
            </React.Fragment>
          ),

          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrencenter]: hasVariant(
              $state,
              "center",
              "center"
            )
          })
        })}
      </p.Stack>
      {(hasVariant($state, "withButton", "withButton") ? true : false) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___3MDg6, {
            [sty.freeBoxcenter___3MDg6Z8GsX]: hasVariant(
              $state,
              "center",
              "center"
            ),

            [sty.freeBoxwithButton___3MDg6H7BQ]: hasVariant(
              $state,
              "withButton",
              "withButton"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Button
                className={classNames("__wab_instance", sty.button__xFyrA, {
                  [sty.buttonwithButton__xFyrAh7BQ]: hasVariant(
                    $state,
                    "withButton",
                    "withButton"
                  )
                })}
                colors={"black"}
                endIcon={
                  <RightArrowIcon
                    className={classNames(projectcss.all, sty.svg__feNrs)}
                    role={"img"}
                  />
                }
                rounded={true}
                size={"large"}
              />
            ),

            value: args.children2,
            className: classNames(sty.slotTargetChildren2, {
              [sty.slotTargetChildren2center]: hasVariant(
                $state,
                "center",
                "center"
              ),

              [sty.slotTargetChildren2withButton]: hasVariant(
                $state,
                "withButton",
                "withButton"
              )
            })
          })}
        </p.Stack>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicValue__ArgProps,
          internalVariantPropNames: PlasmicValue__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicValue__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValue";
  } else {
    func.displayName = `PlasmicValue.${nodeName}`;
  }
  return func;
}

export const PlasmicValue = Object.assign(
  // Top-level PlasmicValue renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicValue
    internalVariantProps: PlasmicValue__VariantProps,
    internalArgProps: PlasmicValue__ArgProps
  }
);

export default PlasmicValue;
/* prettier-ignore-end */
