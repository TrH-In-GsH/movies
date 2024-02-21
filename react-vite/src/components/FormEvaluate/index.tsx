import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        firstName: yup.string().required(),
        email: yup
            .string()
            .required()
            .email()
            .matches(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Email khong dung dinh dang"
            ),
        mobile: yup
            .string()
            .required()
            .matches(/(0[3|5|7|8|9])+([0-9]{8})\b/g, "Mobile chua dung dinh dang"),
        evaluate: yup
            .string()
            .required()
    })


const FormEvaluate = () => {
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex">
            <div className="evaluation m-auto mt-[200px] flex-col w-[800px]">

                <div className="header-eva flex h-40 mb-2 relative">
                    <input className="flex-1 w-full pb-[120px] px-4 border " placeholder="Nội dung tiếng việt có dấu" {...register("evaluate")} />
                </div>
                <div className="bottom-eva flex w-[800px]">
                    <div className="mr-2">
                        <input className="w-[200px]" placeholder="firstName" {...register("firstName")} />
                        <p>{errors.firstName?.message}</p>
                    </div>

                    <div className="mr-2">
                        <input className="w-[200px]" placeholder="email" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </div>

                    <div className="mr-2">
                        <input className="w-[240px]" placeholder="mobile" {...register("mobile")} />
                        <p>{errors.mobile?.message}</p>
                    </div>

                    <button className="btn btn-primary flex-1" type="submit" disabled={!isValid}>
                        Đánh giá
                    </button>
                </div>

            </div>

        </form>
    )
};

export default FormEvaluate;