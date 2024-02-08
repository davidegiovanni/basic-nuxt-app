import type { SubmitFunction } from "@remix-run/react";
import AccessibilityConfigurator from "./AccessibilityConfigurator";
import LocaleConfigurator from "./LocaleConfigurator";

export type ToolbarProps = {
  path: string;
  currentContrastMode: string;
  currentTextIncreaseAmount: string;
  currentLocale: string;
  availableLocales: string[];
  submit: SubmitFunction;
}

export default function Toolbar({ path, currentContrastMode, currentLocale, currentTextIncreaseAmount, availableLocales, submit }: ToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-2 p-1 border-b bg-white relative z-[70]">
      <AccessibilityConfigurator
        currentContrastMode={currentContrastMode}
        currentTextIncreaseAmount={currentTextIncreaseAmount}
        onContrastModeChange={(mode) => submitContrastSettings(mode, path, submit)}
        onTextIncreaseChange={(amount) => submitTextIncreaseSettings(amount, path, submit)}
      />
      <div>
        <LocaleConfigurator currentLocale={currentLocale} availableLocales={availableLocales} />
      </div>
    </div>
  )
}

function submitContrastSettings(mode: string, path: string, submit: SubmitFunction) {
  submit(
    {
      contrastMode: mode,
    },
    {
      method: "get",
      action: `${path}`,
    }
  );
}

function submitTextIncreaseSettings(amount: string, path: string, submit: SubmitFunction) {
  submit(
    {
      textIncrease: amount,
    },
    {
      method: "get",
      action: `${path}`,
    }
  );
}