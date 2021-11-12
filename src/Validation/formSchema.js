import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .min(2, "name must be at least 2 characters")
        .trim()
        .required("name must be at least 2 characters"),
    size: yup
        .string(),
    mushrooms: yup.boolean(),
    blackOlives: yup.boolean(),
    onions: yup.boolean(),
    greenPeppers: yup.boolean(),
    spinach: yup.boolean(),
    zucchini: yup.boolean(),
    pineapple: yup.boolean(),
    special: yup
        .string()
})

export default schema;