// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bvkZrMdCandYGyPCH1rh27
import * as React from "react";
import { CommerceProviderComponent } from "@plasmicpkgs/commerce-swell"; // plasmic-import: tbDZqxoBkbo/codeComponent

export default function GlobalContextsProvider(props) {
  const { children, commerceProviderComponentProps } = props;
  return (
    <CommerceProviderComponent
      {...commerceProviderComponentProps}
      publicKey={
        commerceProviderComponentProps &&
        "publicKey" in commerceProviderComponentProps
          ? commerceProviderComponentProps.publicKey
          : "pk_sv6phRbZg3YRryYB3MpSSBxwmOGuiM9f"
      }
      storeId={
        commerceProviderComponentProps &&
        "storeId" in commerceProviderComponentProps
          ? commerceProviderComponentProps.storeId
          : "plasmic-commerce-storefront"
      }
    >
      {children}
    </CommerceProviderComponent>
  );
}
