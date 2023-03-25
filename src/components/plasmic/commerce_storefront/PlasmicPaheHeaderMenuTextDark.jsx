// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bvkZrMdCandYGyPCH1rh27
// Component: O-g4SX5rheQN7b
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantshZ85LbGiaxg0I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: hZ8-5LbGiaxg0I/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_commerce_storefront.module.css"; // plasmic-import: bvkZrMdCandYGyPCH1rh27/projectcss
import sty from "./PlasmicPaheHeaderMenuTextDark.module.css"; // plasmic-import: O-g4SX5rheQN7b/css
import CartIcon from "./icons/PlasmicIcon__Cart"; // plasmic-import: oXVW4CinSL8V7v/icon

export const PlasmicPaheHeaderMenuTextDark__VariantProps = new Array();

export const PlasmicPaheHeaderMenuTextDark__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicPaheHeaderMenuTextDark__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshZ85LbGiaxg0I()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__hQoL)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__cKnvf)}
        >
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__aEyK4
            )}
            href={`/category`}
          >
            {"Shop"}
          </a>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___3TKlG
            )}
            href={`/aboutus`}
          >
            {"About"}
          </a>
        </p.Stack>
        <div className={classNames(projectcss.all, sty.freeBox__blmbF)}>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__rsftP
            )}
            href={
              hasVariant(globalVariants, "screen", "mobileOnly") ? `/` : `/`
            }
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "Commerce"
              : "Commerce"}
          </a>
        </div>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___9TBeg)}
        >
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___8Tn7T
            )}
            href={`/aboutus`}
          >
            {"Login"}
          </a>
          <CartIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </p.Stack>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPaheHeaderMenuTextDark__ArgProps,
          internalVariantPropNames: PlasmicPaheHeaderMenuTextDark__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPaheHeaderMenuTextDark__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPaheHeaderMenuTextDark";
  } else {
    func.displayName = `PlasmicPaheHeaderMenuTextDark.${nodeName}`;
  }
  return func;
}

export const PlasmicPaheHeaderMenuTextDark = Object.assign(
  // Top-level PlasmicPaheHeaderMenuTextDark renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicPaheHeaderMenuTextDark
    internalVariantProps: PlasmicPaheHeaderMenuTextDark__VariantProps,
    internalArgProps: PlasmicPaheHeaderMenuTextDark__ArgProps
  }
);

export default PlasmicPaheHeaderMenuTextDark;
/* prettier-ignore-end */