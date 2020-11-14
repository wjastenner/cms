import styled from "styled-components"
import {space} from "styled-system"

const Box = styled.div`
  ${space}
  color: red;
`

export interface CCProps {
}

export default function ContentCreator (props: CCProps) {
  return (<Box p={5}><Box>hello</Box></Box>)
}
