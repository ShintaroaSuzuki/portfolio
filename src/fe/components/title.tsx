import { FormControlOptions, useFormControl } from "@chakra-ui/form-control"
import {
  chakra,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  HTMLChakraProps,
} from "@chakra-ui/system"
import { cx } from "@chakra-ui/utils"
import * as React from 'react'

interface InputOptions {
  /**
   * The border color when the input is focused. Use color keys in `theme.colors`
   * @example
   * focusBorderColor = "blue.500"
   */
  focusBorderColor?: string
  /**
   * The border color when the input is invalid. Use color keys in `theme.colors`
   * @example
   * errorBorderColor = "red.500"
   */
  errorBorderColor?: string
  /**
   * If `true`, the input element will span the full width of its parent
   *
   * @deprecated
   * This component defaults to 100% width,
   *  please use the props `maxWidth` or `width` to configure
   */
  isFullWidth?: boolean
}

type Omitted = "disabled" | "required" | "readOnly" | "size"

export interface InputProps
  extends Omit<HTMLChakraProps<"input">, Omitted>,
    InputOptions,
    ThemingProps<"Input">,
    FormControlOptions {}

/**
 * Input
 *
 * Element that allows users enter single valued data.
 */
export const Input = forwardRef<InputProps, "input">((props, ref) => {
  const ownProps = omitThemingProps(props)
  const input = useFormControl<HTMLInputElement>(ownProps)
  const _className = cx("chakra-input", props.className)

  return (
    <chakra.input
      {...input}
      __css={{
        bg: "transparent",
        px: 0,
        height: "auto",
        _focus: {outline: "none"}
      }}
      ref={ref}
      className={_className}
    />
  )
})

const Title = ({ title, onChangeText }: { title: string, onChangeText: React.ChangeEventHandler<HTMLInputElement> }) => {
    return (
      <Input placeholder="Title..." value={title} onChange={onChangeText()}/>
    )
}

export default Title
