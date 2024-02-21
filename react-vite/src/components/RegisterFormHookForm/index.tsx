import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    username: string
    email: string
    mobile: string
}

const RegisterFormHookForm = () => {
    //   const [username, setUsername] = useState("");
    //   const [email, setEmail] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {/* register your input into the hook by invoking the "register" function */}
                <input placeholder="username" {...register("username")} />
            </div>

            <div>
                {/* include validation with required or other standard HTML validation rules */}
                <input placeholder="email" {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <input placeholder="mobile" {...register("mobile")} />
            </div>

            <input type="submit" />
        </form>
    )
};

export default RegisterFormHookForm;