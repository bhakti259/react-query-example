import { FormControl as FormControl$1, FormLabel, FormErrorMessage, FormHelperText, Stack, Checkbox, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Box, Progress, RadioGroup, Button, Select, Flex, Switch, Textarea, Slider, SliderTrack, SliderFilledTrack, SliderThumb, PinInputField, HStack, PinInput } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useField, useFormikContext } from 'formik';
import { css } from '@emotion/react';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _excluded = ["children", "name", "label", "labelProps", "helperText", "helperTextProps", "errorMessageProps"];
var FormControl = function FormControl(props) {
  var children = props.children,
      name = props.name,
      label = props.label,
      labelProps = props.labelProps,
      helperText = props.helperText,
      helperTextProps = props.helperTextProps,
      errorMessageProps = props.errorMessageProps,
      rest = _objectWithoutPropertiesLoose(props, _excluded);

  var _useField = useField(name),
      _useField$ = _useField[1],
      error = _useField$.error,
      touched = _useField$.touched;

  return React.createElement(FormControl$1, Object.assign({
    isInvalid: !!error && touched
  }, rest), label && typeof label === 'string' ? React.createElement(FormLabel, Object.assign({
    htmlFor: name
  }, labelProps), label) : label, children, error && React.createElement(FormErrorMessage, Object.assign({}, errorMessageProps), error), helperText && typeof helperText === 'string' ? React.createElement(FormHelperText, Object.assign({}, helperTextProps), helperText) : helperText);
};

var _excluded$1 = ["name", "label", "children", "stackProps"];
var CheckboxContainer = function CheckboxContainer(props) {
  var name = props.name,
      label = props.label,
      children = props.children,
      stackProps = props.stackProps,
      rest = _objectWithoutPropertiesLoose(props, _excluded$1);

  return React.createElement(FormControl, Object.assign({
    name: name,
    label: label
  }, rest), React.createElement(Stack, Object.assign({
    pl: 6,
    mt: 1,
    spacing: 1
  }, stackProps), children));
};

var _excluded$2 = ["name", "label", "children"];
var CheckboxControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var name = props.name,
      label = props.label,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, _excluded$2);

  var _useField = useField(name),
      field = _useField[0],
      _useField$ = _useField[1],
      error = _useField$.error,
      touched = _useField$.touched;

  var _useFormikContext = useFormikContext(),
      isSubmitting = _useFormikContext.isSubmitting;

  var isChecked;

  if (field.value instanceof Array) {
    var _field$value$includes;

    isChecked = (_field$value$includes = field.value.includes(props.value)) != null ? _field$value$includes : false;
  }

  return React.createElement(Checkbox, Object.assign({}, field, {
    isInvalid: !!error && touched,
    isChecked: isChecked,
    isDisabled: isSubmitting,
    ref: ref
  }, rest), label, children);
});

var _excluded$3 = ["name", "label", "children", "checkBoxProps"];
var CheckboxSingleControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var name = props.name,
      label = props.label,
      children = props.children,
      checkBoxProps = props.checkBoxProps,
      rest = _objectWithoutPropertiesLoose(props, _excluded$3);

  var _useField = useField(name),
      field = _useField[0],
      _useField$ = _useField[1],
      error = _useField$.error,
      touched = _useField$.touched;

  var _useFormikContext = useFormikContext(),
      isSubmitting = _useFormikContext.isSubmitting;

  var isChecked = field.value;
  return React.createElement(FormControl, Object.assign({
    name: name
  }, rest), React.createElement(Checkbox, Object.assign({}, field, {
    id: name,
    isInvalid: !!error && touched,
    isChecked: isChecked,
    isDisabled: isSubmitting,
    ref: ref
  }, checkBoxProps), label, children));
});

var _excluded$4 = ["name", "label", "inputProps"];
var InputControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var name = props.name,
      label = props.label,
      inputProps = props.inputProps,
      rest = _objectWithoutPropertiesLoose(props, _excluded$4);

  var _useField = useField(name),
      field = _useField[0];

  var _useFormikContext = useFormikContext(),
      isSubmitting = _useFormikContext.isSubmitting;

  return React.createElement(FormControl, Object.assign({
    name: name,
    label: label
  }, rest), React.createElement(Input, Object.assign({}, field, {
    id: name,
    isDisabled: isSubmitting
  }, inputProps, {
    ref: ref
  })));
});

var _excluded$5 = ["name", "label", "showStepper", "children", "numberInputProps"];
var NumberInputControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var name = props.name,
      label = props.label,
      _props$showStepper = props.showStepper,
      showStepper = _props$showStepper === void 0 ? true : _props$showStepper,
      children = props.children,
      numberInputProps = props.numberInputProps,
      rest = _objectWithoutPropertiesLoose(props, _excluded$5);

  var _useField = useField(name),
      field = _useField[0],
      _useField$ = _useField[1],
      error = _useField$.error,
      touched = _useField$.touched;

  var _useFormikContext = useFormikContext(),
      setFieldValue = _useFormikContext.setFieldValue,
      isSubmitting = _useFormikContext.isSubmitting;

  var $setFieldValue = function $setFieldValue(name) {
    return function (value) {
      return setFieldValue(name, value);
    };
  };

  return React.createElement(FormControl, Object.assign({
    name: name,
    label: label
  }, rest), React.createElement(NumberInput, Object.assign({}, field, {
    id: name,
    onChange: $setFieldValue(name),
    isInvalid: !!error && touched,
    isDisabled: isSubmitting
  }, numberInputProps), React.createElement(NumberInputField, {
    name: name,
    ref: ref
  }), showStepper && React.createElement(NumberInputStepper, null, React.createElement(NumberIncrementStepper, null), React.createElement(NumberDecrementStepper, null)), children));
});

var _excluded$6 = ["progressFn", "progressProps"];

var calculateProgress = function calculateProgress(numFields, numErrors) {
  var validFields = numFields - numErrors;
  return validFields / numFields * 100;
};

var PercentComplete = function PercentComplete(props) {
  var _props$progressFn = props.progressFn,
      progressFn = _props$progressFn === void 0 ? calculateProgress : _props$progressFn,
      progressProps = props.progressProps,
      rest = _objectWithoutPropertiesLoose(props, _excluded$6);

  var _useFormikContext = useFormikContext(),
      errors = _useFormikContext.errors,
      values = _useFormikContext.values,
      validateForm = _useFormikContext.validateForm,
      dirty = _useFormikContext.dirty;

  var numFields = Object.keys(values).length;
  var numErrors = Object.keys(errors).length;
  useEffect(function () {
    validateForm();
  }, [dirty]);
  return React.createElement(Box, Object.assign({
    marginY: 5
  }, rest), React.createElement(Progress, Object.assign({
    hasStripe: true,
    isAnimated: true,
    value: progressFn(numFields, numErrors)
  }, progressProps)));
};

var _excluded$7 = ["name", "label", "radioGroupProps", "stackProps", "children"];
var RadioGroupControl = function RadioGroupControl(props) {
  var name = props.name,
      label = props.label,
      radioGroupProps = props.radioGroupProps,
      stackProps = props.stackProps,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, _excluded$7);

  var _useField = useField(name),
      field = _useField[0];

  var _useFormikContext = useFormikContext(),
      setFieldValue = _useFormikContext.setFieldValue,
      isSubmitting = _useFormikContext.isSubmitting;

  var handleChange = function handleChange(value) {
    setFieldValue(name, value);
  };

  return React.createElement(FormControl, Object.assign({
    name: name,
    label: label
  }, rest), React.createElement(RadioGroup, Object.assign({}, field, {
    onChange: handleChange,
    isDisabled: isSubmitting
  }, radioGroupProps), React.createElement(Stack, Object.assign({
    direction: "row"
  }, stackProps), children)));
};

var _excluded$8 = ["children"];
var ResetButton = function ResetButton(props) {
  var children = props.children,
      rest = _objectWithoutPropertiesLoose(props, _excluded$8);

  var _useFormikContext = useFormikContext(),
      isSubmitting = _useFormikContext.isSubmitting,
      dirty = _useFormikContext.dirty,
      resetForm = _useFormikContext.resetForm;

  return React.createElement(Button, Object.assign({
    colorScheme: "teal",
    variant: "outline",
    onClick: function onClick() {
      return resetForm();
    },
    isDisabled: isSubmitting || !dirty
  }, rest), children);
};

var _excluded$9 = ["name", "label", "selectProps", "children"];
var SelectControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var name = props.name,
      label = props.label,
      selectProps = props.selectProps,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, _excluded$9);

  var _useField = useField(name),
      field = _useField[0];

  var _useFormikContext = useFormikContext(),
      isSubmitting = _useFormikContext.isSubmitting;

  return React.createElement(FormControl, Object.assign({
    name: name,
    label: label
  }, rest), React.createElement(Select, Object.assign({}, field, {
    id: name,
    isDisabled: isSubmitting,
    ref: ref
  }, selectProps), children));
});

var _excluded$a = ["children"];
var SubmitButton = function SubmitButton(props) {
  var children = props.children,
      rest = _objectWithoutPropertiesLoose(props, _excluded$a);

  var _useFormikContext = useFormikContext(),
      isSubmitting = _useFormikContext.isSubmitting;

  return React.createElement(Button, Object.assign({
    type: "submit",
    isLoading: isSubmitting,
    colorScheme: "teal"
  }, rest), children);
};

var _templateObject;

var _excluded$b = ["name", "label", "switchProps"];
var SwitchControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var name = props.name,
      label = props.label,
      switchProps = props.switchProps,
      rest = _objectWithoutPropertiesLoose(props, _excluded$b);

  var _useField = useField(name),
      field = _useField[0],
      _useField$ = _useField[1],
      error = _useField$.error,
      touched = _useField$.touched;

  var _useFormikContext = useFormikContext(),
      isSubmitting = _useFormikContext.isSubmitting;

  return React.createElement(Box, {
    css: css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n          .chakra-form__label {\n            margin-bottom: 0;\n          }\n          .chakra-switch {\n            display: flex;\n            align-items: center;\n            margin-right: 0.75rem;\n          }\n          .chakra-form__error-message {\n            margin-top: 0;\n          }\n        "])))
  }, React.createElement(FormControl, Object.assign({
    name: name,
    label: label,
    as: Flex,
    alignItems: "center"
  }, rest), React.createElement(Switch, Object.assign({}, field, {
    id: name,
    isInvalid: !!error && touched,
    isChecked: field.value,
    isDisabled: isSubmitting,
    ref: ref
  }, switchProps))));
});

var _excluded$c = ["name", "label", "textareaProps"];
var TextareaControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var name = props.name,
      label = props.label,
      textareaProps = props.textareaProps,
      rest = _objectWithoutPropertiesLoose(props, _excluded$c);

  var _useField = useField(name),
      field = _useField[0];

  var _useFormikContext = useFormikContext(),
      isSubmitting = _useFormikContext.isSubmitting;

  return React.createElement(FormControl, Object.assign({
    name: name,
    label: label
  }, rest), React.createElement(Textarea, Object.assign({}, field, {
    id: name,
    isDisabled: isSubmitting,
    ref: ref
  }, textareaProps)));
});

var _excluded$d = ["name", "label", "sliderProps", "sliderTrackProps", "sliderThumbProps"];
var SliderControl = function SliderControl(props) {
  var name = props.name,
      label = props.label,
      sliderProps = props.sliderProps,
      sliderTrackProps = props.sliderTrackProps,
      sliderThumbProps = props.sliderThumbProps,
      rest = _objectWithoutPropertiesLoose(props, _excluded$d);

  var _useField = useField(name),
      field = _useField[0],
      setValue = _useField[2].setValue;

  var _useFormikContext = useFormikContext(),
      isSubmitting = _useFormikContext.isSubmitting;

  function handleChange(value) {
    setValue(value);
  } // Does not behave like expected, so we manually handle it.


  function handleBlur(e) {
    e.target.name = name;
    field.onBlur(e);
  }

  return React.createElement(FormControl, Object.assign({
    name: name,
    label: label
  }, rest), React.createElement(Slider, Object.assign({}, field, {
    id: name,
    onChange: handleChange,
    onBlur: handleBlur,
    isDisabled: isSubmitting
  }, sliderProps), React.createElement(SliderTrack, Object.assign({}, sliderTrackProps), React.createElement(SliderFilledTrack, null)), React.createElement(SliderThumb, Object.assign({}, sliderThumbProps))));
};

var _excluded$e = ["name", "label", "pinAmount", "stackProps", "pinInputProps"];
var PinInputControl = function PinInputControl(props) {
  var name = props.name,
      label = props.label,
      pinAmount = props.pinAmount,
      stackProps = props.stackProps,
      pinInputProps = props.pinInputProps,
      rest = _objectWithoutPropertiesLoose(props, _excluded$e);

  var _useField = useField(name),
      field = _useField[0],
      setValue = _useField[2].setValue;

  var _useFormikContext = useFormikContext(),
      isSubmitting = _useFormikContext.isSubmitting;

  var renderedPinInputFields = Array(pinAmount).fill(null).map(function (_noop, i) {
    return React.createElement(PinInputField, {
      key: i
    });
  });

  function handleChange(value) {
    setValue(value);
  }

  return React.createElement(FormControl, Object.assign({
    name: name,
    label: label
  }, rest), React.createElement(HStack, Object.assign({}, stackProps), React.createElement(PinInput, Object.assign({}, field, {
    onChange: handleChange,
    isDisabled: isSubmitting
  }, pinInputProps), renderedPinInputFields)));
};

export { CheckboxContainer, CheckboxControl, CheckboxSingleControl, FormControl, InputControl, NumberInputControl, PercentComplete, PinInputControl, RadioGroupControl, ResetButton, SelectControl, SliderControl, SubmitButton, SwitchControl, TextareaControl };
//# sourceMappingURL=formik-chakra-ui.esm.js.map
