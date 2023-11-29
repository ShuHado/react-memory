const items = [
	{
		name: "Charles",
		url: "https://i.ibb.co/2KCPkCq/Charles.jpg",
	},
	{
		name: "C.C.",
		url: "https://i.ibb.co/yFB3sGq/C-C.jpg",
	},
	{
		name: "Kallen",
		url: "https://i.ibb.co/88pZZbD/Kallen.jpg",
	},
	{
		name: "Lelouch",
		url: "https://i.ibb.co/mSS7tSL/Lelouch.jpg",
	},
	{
		name: "Xingke",
		url: "https://i.ibb.co/wB7YCnz/Xingke.jpg",
	},
	{
		name: "Schneizel",
		url: "https://i.ibb.co/nQ9Tx4q/Schneizel.jpg",
	},
	{
		name: "Shirley",
		url: "https://i.ibb.co/CzYvCM9/Shirley.jpg",
	},
	{
		name: "Suzaku",
		url: "https://i.ibb.co/CsYSzDg/Suzaku.jpg",
	},
	{
		name: "Charles",
		url: "https://i.ibb.co/2KCPkCq/Charles.jpg",
	},
	{
		name: "C.C.",
		url: "https://i.ibb.co/yFB3sGq/C-C.jpg",
	},
	{
		name: "Kallen",
		url: "https://i.ibb.co/88pZZbD/Kallen.jpg",
	},
	{
		name: "Lelouch",
		url: "https://i.ibb.co/mSS7tSL/Lelouch.jpg",
	},
	{
		name: "Xingke",
		url: "https://i.ibb.co/wB7YCnz/Xingke.jpg",
	},
	{
		name: "Schneizel",
		url: "https://i.ibb.co/nQ9Tx4q/Schneizel.jpg",
	},
	{
		name: "Shirley",
		url: "https://i.ibb.co/CzYvCM9/Shirley.jpg",
	},
	{
		name: "Suzaku",
		url: "https://i.ibb.co/CsYSzDg/Suzaku.jpg",
	},
];

function App() {
	return (
		<>
			<h1 className="text-center">React Memory</h1>

			<div className="w-screen flex flex-wrap justify-center gap-4">
				{items.map(
					(img: { name: string; url: string }, index: number) => (
						<div className="w-1/5">
							<img
								className="w-11/12"
								src={img.url}
								alt={img.name + " card"}
								key={index}
							/>
						</div>
					)
				)}
			</div>
		</>
	);
}

export default App;
