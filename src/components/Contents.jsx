import React from "react"
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
	PlayCircleOutlined,
	EllipsisOutlined,
	SettingOutlined,
	LikeOutlined,
	MessageOutlined,
	StarOutlined,
	ArrowDownOutlined,
	ArrowUpOutlined,
} from "@ant-design/icons"

import {
	Breadcrumb,
	Layout,
	Menu,
	Calendar,
	theme,
	Button,
	Avatar,
	Badge,
	Card,
	List,
	Space,
	Progress,
	Col,
	Row,
	Statistic,
} from "antd"

const { Meta } = Card
const { Header, Content, Footer, Sider } = Layout

const items1 = ["Главная", "Кейсы", "О нас", "Контакты"].map((key) => ({
	key,
	label: `${key}`,
}))

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
	(icon, index) => {
		const key = String(index + 1)
		return {
			key: `sub${key}`,
			icon: React.createElement(icon),
			label: `Секция ${key}`,
			children: new Array(2).fill(null).map((_, j) => {
				const subKey = index * 2 + j + 1
				return {
					key: subKey,
					label: `Подсекция ${subKey}`,
				}
			}),
		}
	}
)

const onPanelChange = (value, mode) => {
	console.log(value.format("YYYY-MM-DD"), mode)
}

const names = [
	"Пеппер Потс",
	"Тони Старк",
	"Брюс Баннер",
	"Наташа Романофф",
	"Стив Роджерс",
	"Тор Одинсон",
	"Клинт Бартон",
	"Питер Паркер",
	"Стивен Стрэндж",
	"Скотт Лэнг",
]

const positions = [
	"CEO",
	"Lead Developer",
	"Project Manager",
	"Product Owner",
	"CIO",
	"CMO",
	"CSO",
	"Lead Developer",
	"Project Manager",
	"Product Owner",
]

const contents = [
	"Узнайте о предстоящих вебинарах и сессиях вопросов и ответов с новыми видеолекциями и материалами.",

	"Мы также обновили курс обучения и подготовили новые упражнения для практики.",

	"Получите доступ к эксклюзивным материалам и узнайте больше о наших последних проектах.",

	"Присоединяйтесь к нашим онлайн-семинарам и улучшите свои навыки.",

	"Следите за нашими новостями и не пропустите важные обновления.",
	"Смотрите наши новые видеоуроки и учитесь у лучших экспертов.",

	"Примите участие в наших интерактивных сессиях и задайте свои вопросы.",

	"Исследуйте наши новые инструменты и улучшите свою продуктивность.",
	"Участвуйте в наших воркшопах и работайте над реальными проектами.",
	"Получите сертификат после завершения нашего курса.",
]

const data = Array.from({
	length: 10,
}).map((_, i) => ({
	href: "https://ant.design",
	title: `${names[i % names.length]}`,
	avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
	description: `${positions[i % positions.length]}`,
	content: `${contents[i % contents.length]}`,
}))

const IconText = ({ icon, text }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
)

const Contents = ({ signout }) => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken()
	return (
		<div className="w-[100vw] h-[100vh]">
			<Layout>
				<Header
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<div className="demo-logo" />
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={["2"]}
						items={items1}
						style={{
							flex: 1,
							minWidth: 0,
						}}
					/>
					<div className="flex space-x-5">
						<Badge count={3}>
							<Avatar shape="circle" size={40} icon={<UserOutlined />} />
						</Badge>
						<Button onClick={signout} type="primary">
							Выйти
						</Button>
					</div>
				</Header>
				<Content
					style={{
						padding: "0 48px",
					}}
				>
					<Breadcrumb
						style={{
							margin: "16px 0",
						}}
					>
						<Breadcrumb.Item>Главная</Breadcrumb.Item>
						<Breadcrumb.Item>Список</Breadcrumb.Item>
						<Breadcrumb.Item>Контент</Breadcrumb.Item>
					</Breadcrumb>
					<Layout
						style={{
							padding: "24px 0",
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						<Sider
							style={{
								background: colorBgContainer,
							}}
							width={200}
						>
							<Menu
								mode="inline"
								defaultSelectedKeys={["1"]}
								defaultOpenKeys={["sub1"]}
								style={{
									height: "100%",
								}}
								items={items2}
							/>
						</Sider>
						<Content
							style={{
								padding: "0 24px",
								minHeight: 280,
							}}
						>
							<div className="flex gap-12 mb-10">
								<div className="w-[400px] border rounded-md">
									<Calendar fullscreen={false} onPanelChange={onPanelChange} />
								</div>

								<div>
									<h2 className="text-2xl mb-5">Последние новости</h2>
									<List
										itemLayout="vertical"
										size="large"
										pagination={{
											pageSize: 1,
										}}
										dataSource={data}
										renderItem={(item) => (
											<List.Item
												key={item.title}
												actions={[
													<IconText
														icon={StarOutlined}
														text="156"
														key="list-vertical-star-o"
													/>,
													<IconText
														icon={LikeOutlined}
														text="156"
														key="list-vertical-like-o"
													/>,
													<IconText
														icon={MessageOutlined}
														text="2"
														key="list-vertical-message"
													/>,
												]}
												extra={
													<img
														width={272}
														alt="logo"
														src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398.png"
													/>
												}
											>
												<List.Item.Meta
													avatar={<Avatar src={item.avatar} />}
													title={<a href={item.href}>{item.title}</a>}
													description={item.description}
												/>
												{item.content}
											</List.Item>
										)}
									/>
								</div>
							</div>

							<div className="flex justify-between items-center mb-10">
								<div>
									<div className="flex gap-10">
										<Progress type="circle" percent={56} strokeColor="red" />
										<Progress type="circle" percent={75} strokeColor="green" />
										<Progress type="circle" percent={63} />
									</div>
									
									<div className="flex items-center mt-2">
										<h3 className="text-[18px] font-semibold ml-[30px]">
											Задачи
										</h3>
										<h3 className="text-[18px] font-semibold ml-[100px]">
											Квесты
										</h3>
										<h3 className="text-[18px] font-semibold ml-[100px]">
											Общий
										</h3>
									</div>
								</div>

								<div className="w-[700px]">
									<Row gutter={16}>
										<Col span={12}>
											<Card bordered={false}>
												<Statistic
													title="Успеваемость за неделю"
													value={34.28}
													precision={2}
													valueStyle={{
														color: "#3f8600",
													}}
													prefix={<ArrowUpOutlined />}
													suffix="%"
												/>
											</Card>
										</Col>
										<Col span={12}>
											<Card bordered={false}>
												<Statistic
													title="Успеваемость за месяц"
													value={9.3}
													precision={2}
													valueStyle={{
														color: "#cf1322",
													}}
													prefix={<ArrowDownOutlined />}
													suffix="%"
												/>
											</Card>
										</Col>
									</Row>
								</div>
							</div>

							<div className="w-full flex gap-12">
								<Card
									style={{
										width: 350,
									}}
									cover={
										<img
											alt="example"
											src="https://images.hdqwalls.com/download/python-logo-4k-i6-1024x768.jpg"
										/>
									}
									actions={[
										<SettingOutlined key="setting" />,
										<PlayCircleOutlined key="play" />,
										<EllipsisOutlined key="ellipsis" />,
									]}
								>
									<Meta
										avatar={
											<Avatar src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg" />
										}
										title="Python Разработчик"
										description="Курс по языку программирования Python от 0 до Профи"
									/>
								</Card>
								<Card
									style={{
										width: 350,
									}}
									cover={
										<img
											alt="example"
											src="https://emotionstudios.net/wp-content/uploads/2024/03/react-compiler.jpg"
										/>
									}
									actions={[
										<SettingOutlined key="setting" />,
										<PlayCircleOutlined key="play" />,
										<EllipsisOutlined key="ellipsis" />,
									]}
								>
									<Meta
										avatar={
											<Avatar src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" />
										}
										title="React Разработчик"
										description="Курс по библиотеке React.js от 0 до Сенсея"
									/>
								</Card>
								<Card
									style={{
										width: 350,
									}}
									cover={
										<img
											alt="example"
											src="https://karaganda.distant-vuz.ru/wp-content/uploads/sites/6/2023/02/java1.jpg"
										/>
									}
									actions={[
										<SettingOutlined key="setting" />,
										<PlayCircleOutlined key="play" />,
										<EllipsisOutlined key="ellipsis" />,
									]}
								>
									<Meta
										avatar={
											<Avatar src="https://www.shutterstock.com/image-photo/smiling-mature-man-wearing-spectacles-600nw-1432699253.jpg" />
										}
										title="Java Разработчик"
										description="Курс по языку программирования Java от 0 до Гуру"
									/>
								</Card>
							</div>
						</Content>
					</Layout>
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}
				>
					Ant Design ©{new Date().getFullYear()} Created by Issa
				</Footer>
			</Layout>
		</div>
	)
}

export default Contents
