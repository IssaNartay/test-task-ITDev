import { useState } from "react"
import { Form, Input, Button, message } from "antd"
import { useNavigate } from "react-router-dom"

const Login = ({ setToken }) => {
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const onFinish = (values) => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			if (values.username === "admin" && values.password === "password") {
				setToken("fake-token")
				message.success("Авторизация успешна!")
				navigate("/")
			} else {
				message.error("Неправильное имя пользователя или пароль")
			}
		}, 1000)
	}

	return (
		<Form
			name="login"
			onFinish={onFinish}
			className='max-w-[500px] mx-[600px] p-[50px] border space-y-11 bg-white rounded-xl shadow-md'
		>
			<h2 className='text-2xl text-center font-semibold'>Войдите в аккаунт!</h2>
			<Form.Item
				name="username"
				rules={[
					{ required: true, message: "Введите имя пользователя!" },
				]}
			>
				<Input placeholder="Имя пользователя" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "Введите пароль!" }]}
			>
				<Input.Password placeholder="Пароль" />
			</Form.Item>
			<Form.Item>
				<Button className='mx-[70px] text-lg p-5' type="primary" htmlType="submit" loading={loading}>
					Войти
				</Button>
			</Form.Item>
		</Form>
	)
}

export default Login
