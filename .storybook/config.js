import React from "react";
import { configure, addDecorator } from "@storybook/react";

const ThemeProviderWrap = (storyFn, context) => <div>{storyFn(context)}</div>;

addDecorator(ThemeProviderWrap);

function loadStories() {
  require("./stories/form/index");
  require("./stories/appPage/index");
  require("./stories/table/index");
  require("./stories/util/index");
  require("./stories/cascader/index")
}

configure(loadStories, module);
