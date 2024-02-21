import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        firstName: yup.string().required(),
        age: yup.number().positive().integer().min(18, "ban chua du tuoi").required(),
        email: yup
            .string()
            .required()
            .email()
            .matches(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Email khong dung dinh dang"
            ),
        address: yup.string().nullable(),
        mobile: yup
            .string()
            .required()
            .matches(/(0[3|5|7|8|9])+([0-9]{8})\b/g, "Mobile chua dung dinh dang"),
        password: yup
            .string()
            .required()
            .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#!*%?]).{8,}$/, "password không đúng định dạng"),
        passwordConfirm: yup
            .string()
            .required()
            .oneOf([yup.ref("password"), null], "passwordConfirm must match")
            .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#!*%?]).{8,}$/, "password không đúng định dạng"),
        role: yup
            .string()
            .required()
            .oneOf(["admin", "user", "editor"], "Invalid Role"),
    })


const RegisterFormHookFormValidation = () => {
    //   const [username, setUsername] = useState("");
    //   const [email, setEmail] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder="firstName" {...register("firstName")} />
                <p>{errors.firstName?.message}</p>
            </div>

            <div>
                <input placeholder="age" {...register("age")} />
                <p>{errors.age?.message}</p>
            </div>

            <div>
                <input placeholder="email" {...register("email")} />
                <p>{errors.email?.message}</p>
            </div>


            <div>
                <input placeholder="address" {...register("address")} />
                <p>{errors.address?.message}</p>
            </div>
            <div>
                <input placeholder="mobile" {...register("mobile")} />
                <p>{errors.mobile?.message}</p>
            </div>

            <div>
                <input placeholder="password" {...register("password")} />
                <p>{errors.password?.message}</p>
            </div>
            <div>
                <input placeholder="passwordConfirm" {...register("passwordConfirm")} />
                <p>{errors.passwordConfirm?.message}</p>
            </div>
            <div>
                <input placeholder="Role" {...register("role")} />
                <p>{errors.role?.message}</p>
            </div>
            <button className="btn btn-primary" type="submit" disabled={!isValid}>
                Submit
            </button>
        </form>
    )
};

export default RegisterFormHookFormValidation;