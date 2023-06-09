// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bvkZrMdCandYGyPCH1rh27
// Component: e66wck7VcXzEt9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_commerce_storefront.module.css"; // plasmic-import: bvkZrMdCandYGyPCH1rh27/projectcss
import sty from "./PlasmicRating.module.css"; // plasmic-import: e66wck7VcXzEt9/css
import EmptyStarIcon from "./icons/PlasmicIcon__EmptyStar"; // plasmic-import: plsnOYVv-ojK_W/icon
import FullStarIcon from "./icons/PlasmicIcon__FullStar"; // plasmic-import: 4y2xCyJqOqIagW/icon
import HalfStarIcon from "./icons/PlasmicIcon__HalfStar"; // plasmic-import: gr1CxlgV6vheey/icon

export const PlasmicRating__VariantProps = new Array("rating");

export const PlasmicRating__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicRating__RenderFunc(props) {
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
        path: "rating",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rating
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
        sty.root
      )}
    >
      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "half")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "one")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__etGb5, {
          [sty.svgrating_five__etGb5UBu4B]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf__etGb5BpNu8]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__etGb5BdmeD]: hasVariant(
            $state,
            "rating",
            "four"
          ),

          [sty.svgrating_half__etGb5SJzs8]: hasVariant(
            $state,
            "rating",
            "half"
          ),

          [sty.svgrating_oneHalf__etGb5V7Qii]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),

          [sty.svgrating_one__etGb5YlPbG]: hasVariant($state, "rating", "one"),
          [sty.svgrating_threeHalf__etGb57Zzqk]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),

          [sty.svgrating_three__etGb5PZpAq]: hasVariant(
            $state,
            "rating",
            "three"
          ),

          [sty.svgrating_twoHalf__etGb5ZDl7V]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),

          [sty.svgrating_two__etGb5YTg90]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__yX3P0, {
          [sty.svgrating_five__yX3P0UBu4B]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf__yX3P0BpNu8]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__yX3P0BdmeD]: hasVariant(
            $state,
            "rating",
            "four"
          ),

          [sty.svgrating_oneHalf__yX3P0V7Qii]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),

          [sty.svgrating_threeHalf__yX3P07Zzqk]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),

          [sty.svgrating_three__yX3P0PZpAq]: hasVariant(
            $state,
            "rating",
            "three"
          ),

          [sty.svgrating_twoHalf__yX3P0ZDl7V]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),

          [sty.svgrating_two__yX3P0YTg90]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__p4Tx, {
          [sty.svgrating_five__p4TxuBu4B]: hasVariant($state, "rating", "five"),
          [sty.svgrating_fourHalf__p4TxBpNu8]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__p4TxBdmeD]: hasVariant($state, "rating", "four"),
          [sty.svgrating_threeHalf__p4Tx7Zzqk]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),

          [sty.svgrating_three__p4TxpZpAq]: hasVariant(
            $state,
            "rating",
            "three"
          ),

          [sty.svgrating_twoHalf__p4TxzDl7V]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          )
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__sjpl7, {
          [sty.svgrating_five__sjpl7UBu4B]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf__sjpl7BpNu8]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__sjpl7BdmeD]: hasVariant(
            $state,
            "rating",
            "four"
          ),

          [sty.svgrating_threeHalf__sjpl77Zzqk]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          )
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? HalfStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__ofviw, {
          [sty.svgrating_five__ofviwuBu4B]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf__ofviwBpNu8]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          )
        })}
        role={"img"}
      />
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
          internalArgPropNames: PlasmicRating__ArgProps,
          internalVariantPropNames: PlasmicRating__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRating";
  } else {
    func.displayName = `PlasmicRating.${nodeName}`;
  }
  return func;
}

export const PlasmicRating = Object.assign(
  // Top-level PlasmicRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRating
    internalVariantProps: PlasmicRating__VariantProps,
    internalArgProps: PlasmicRating__ArgProps
  }
);

export default PlasmicRating;
/* prettier-ignore-end */
