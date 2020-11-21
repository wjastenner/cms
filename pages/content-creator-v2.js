import { useState } from 'react'
import styled from 'styled-components'
import { space, color, layout, flexbox, grid, typography } from 'styled-system'

const Box = styled('div')`
    ${space}
    ${color}
    ${layout}
    ${typography}
    ${flexbox}
    ${grid}
`

export default function ContentCreator() {
    const [state, setState] = useState({ modules: [{ name: 'Title' }] })
    const [contentType, setContentType] = useState([
        {
            name: 'Title',
            value: '',
            type: 'text',
            element: 'input',
            deletable: false,
        },
    ])
    const [addDataType, setAddDataType] = useState({
        name: '',
        value: '',
        element: '',
        type: '',
        deletable: true,
    })
    const [dataTypes, setDataTypes] = useState([
        {
            name: 'Description',
            value: '',
            type: 'text',
            element: 'textarea',
            deletable: true,
        },
        {
            name: 'Date',
            value: '',
            type: 'date',
            element: 'input',
            deletable: true,
        },
        {
            name: 'Score',
            value: '',
            type: 'number',
            element: 'input',
            deletable: true,
        },
    ])

    const handleChange = (e) => {
        const element =
            e.target.options &&
            e.target.options[e.target.options.selectedIndex].dataset.element
        setAddDataType({
            ...addDataType,
            element: element,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDataTypes((data) => [...data, addDataType])
        setContentType((data) => [...data, addDataType])
        setAddDataType({
            name: '',
            value: '',
            element: '',
            type: '',
            deletable: true,
        })
    }

    return (
        <>
            <Box p={4} mb={4} bg="lightGrey">
                <Box p={3} bg="gray" color="white" mb={4}>
                    Create Content Type
                </Box>
                {contentType.map((data, i) => {
                    return (
                        <Box
                            key={i}
                            mb={4}
                            display="flex"
                            alignItems="flex-start"
                        >
                            <Box
                                as="label"
                                width="100px"
                                mr={2}
                                htmlFor={data.name}
                                textAlign="right"
                            >
                                {data.name}
                            </Box>
                            <Box
                                as={data.element}
                                type={data.type}
                                id={data.name}
                                flex="1"
                            />
                            {data.deletable && (
                                <Box
                                    as="button"
                                    ml={2}
                                    onClick={() => {
                                        setContentType(
                                            contentType.filter(
                                                (filterData) =>
                                                    filterData.name !==
                                                    data.name
                                            )
                                        )
                                    }}
                                >
                                    x
                                </Box>
                            )}
                        </Box>
                    )
                })}
                <Box
                    as="form"
                    color="white"
                    bg="grey"
                    p={3}
                    mb={4}
                    onSubmit={handleSubmit}
                >
                    <Box mb={3} display="inline-block">
                        Add new field
                    </Box>
                    <Box>
                        <Box as="label" mr={2} htmlFor="addName">
                            Name
                        </Box>
                        <input
                            name="name"
                            type="text"
                            id="addName"
                            // value={addDataType.name}
                            onChange={handleChange}
                            required
                        />
                        <Box as="label" mx={2} htmlFor="addType">
                            Type
                        </Box>
                        <Box
                            as="select"
                            value={addDataType.type}
                            name="type"
                            onChange={handleChange}
                        >
                            <option value="text" data-element="input">
                                Plain text
                            </option>
                            <option value="heading" data-element="input">
                                Heading
                            </option>
                            <option value="paragraph" data-element="textarea">
                                Paragraph
                            </option>
                            <option value="link" data-element="input">
                                Link
                            </option>
                            <option value="date" data-element="input">
                                Date
                            </option>
                            <option value="image" data-element="input">
                                Image
                            </option>
                        </Box>
                        <Box as="input" type="submit" value="Add" ml={3} />
                    </Box>
                </Box>
                {/* <Box mb={3}>Add preset data type</Box>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
                    gridGap={3}
                >
                    {dataTypes.map((dataType) => {
                        return (
                            <Box
                                as="button"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                p={3}
                                bg="white"
                                onClick={() => {
                                    setContentType((data) => [
                                        ...data,
                                        dataType,
                                    ])
                                }}
                            >
                                {dataType.name}
                            </Box>
                        )
                    })}
                </Box> */}
            </Box>
            {/* <Box p={4} bg="lightGrey">
                <Box p={3} bg="gray" color="white" mb={4}>
                    Create Data/Field
                </Box>
                <Box as="form" mb={4}>
                    <Box>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" />
                    </Box>
                    <Box as="button" mt={3}>
                        Add new field
                    </Box>
                </Box>
                <Box bg="AliceBlue">
                    {state.modules.map((module) => {
                        return (
                            <Box display="flex" justifyContent="space-between">
                                <Box as="p">Name: {module.name}</Box>
                                <Box as="p">Delete</Box>
                            </Box>
                        )
                    })}
                </Box>
            </Box> */}
        </>
    )
}
