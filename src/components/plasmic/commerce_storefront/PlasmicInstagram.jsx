// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bvkZrMdCandYGyPCH1rh27
// Component: 6sZvKT5GqJ8zc4
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
import sty from "./PlasmicInstagram.module.css"; // plasmic-import: 6sZvKT5GqJ8zc4/css
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: eB1cOW98y_DFih/icon
import _11PngKDbHtrdJt9K3 from "./images/_11Png.png"; // plasmic-import: kDB_HtrdJT9k_3/picture
import _2Jpg9V7AzZWtQvFvdo from "./images/_2Jpg.jpg"; // plasmic-import: 9v7AzZWtQVFvdo/picture
import _3JpgFeLpnjp7HJkpj5 from "./images/_3Jpg.jpg"; // plasmic-import: feLpnjp7HJkpj5/picture
import _4JpgGcApQOJCp15Gh from "./images/_4Jpg.jpg"; // plasmic-import: gcApQ_oJCp15Gh/picture
import _5JpgGxiaJAu84JyFy from "./images/_5Jpg.jpg"; // plasmic-import: GXIA-JAu84JYFy/picture

export const PlasmicInstagram__VariantProps = new Array();

export const PlasmicInstagram__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicInstagram__RenderFunc(props) {
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
    <p.Stack
      as={"section"}
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__uo8VG)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__su7Uv)}
        >
          <h3
            data-plasmic-name={"h3"}
            data-plasmic-override={overrides.h3}
            className={classNames(
              projectcss.all,
              projectcss.h3,
              projectcss.__wab_text,
              sty.h3
            )}
          >
            {"Follow us on Instagram for \nmore updates"}
          </h3>
          {true ? (
            <p.Stack
              as={"a"}
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              hasGap={true}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              href={`/item`}
            >
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"See more product"}
              </div>
              <RightArrowIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            </p.Stack>
          ) : null}
        </p.Stack>
      </p.Stack>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__atpm)}
      >
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__jeSm1)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__lyewt)}
              displayHeight={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "100%"
                  : "250px /* plasmic-token: wQGLs78fdH8CKG */"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: _11PngKDbHtrdJt9K3,
                fullWidth: 544,
                fullHeight: 544,
                aspectRatio: undefined
              }}
            />
          </div>
        ) : null}
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__seeK)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__gbxgM)}
              displayHeight={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "100%"
                  : "250px /* plasmic-token: wQGLs78fdH8CKG */"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100% /* plasmic-token: Ebxfy322q0njil */"}
              loading={"lazy"}
              src={{
                src: _2Jpg9V7AzZWtQvFvdo,
                fullWidth: 640,
                fullHeight: 640,
                aspectRatio: undefined
              }}
            />
          </div>
        ) : null}
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__zbr8A)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__dkoKa)}
              displayHeight={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "100%"
                  : "250px /* plasmic-token: wQGLs78fdH8CKG */"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100% /* plasmic-token: Ebxfy322q0njil */"}
              loading={"lazy"}
              src={{
                src: _3JpgFeLpnjp7HJkpj5,
                fullWidth: 430,
                fullHeight: 426,
                aspectRatio: undefined
              }}
            />
          </div>
        ) : null}
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__ae66D)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__hcrHe)}
              displayHeight={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "100%"
                  : "250px /* plasmic-token: wQGLs78fdH8CKG */"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100% /* plasmic-token: Ebxfy322q0njil */"}
              loading={"lazy"}
              src={{
                src: _4JpgGcApQOJCp15Gh,
                fullWidth: 406,
                fullHeight: 400,
                aspectRatio: undefined
              }}
            />
          </div>
        ) : null}
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__q9Hyp)}>
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img___6Jjmf)}
              displayHeight={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "100%"
                  : "250px /* plasmic-token: wQGLs78fdH8CKG */"
              }
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "auto"
                  : "100% /* plasmic-token: Ebxfy322q0njil */"
              }
              loading={"lazy"}
              src={{
                src: _5JpgGxiaJAu84JyFy,
                fullWidth: 640,
                fullHeight: 639,
                aspectRatio: undefined
              }}
            />
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "h3", "link", "text", "svg"],
  h3: ["h3"],
  link: ["link", "text", "svg"],
  text: ["text"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicInstagram__ArgProps,
          internalVariantPropNames: PlasmicInstagram__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicInstagram__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInstagram";
  } else {
    func.displayName = `PlasmicInstagram.${nodeName}`;
  }
  return func;
}

export const PlasmicInstagram = Object.assign(
  // Top-level PlasmicInstagram renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    link: makeNodeComponent("link"),
    text: makeNodeComponent("text"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicInstagram
    internalVariantProps: PlasmicInstagram__VariantProps,
    internalArgProps: PlasmicInstagram__ArgProps
  }
);

export default PlasmicInstagram;
/* prettier-ignore-end */