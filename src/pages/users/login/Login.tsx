import { useState } from "react";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();


	async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			const response = await api.post("/login", {
				login,
				password,
			});

			localStorage.setItem("token", response.data.token);

			alert("Login realizado com sucesso!");

			setLogin("");
			setPassword("");

			navigate("/");
		} catch (error) {
			console.error(error);
			alert("Usuário ou senha inválidos.");
		}
	}

	return (
		<div className="flex items-center justify-center px-6 min-h-[80vh]">
			<div className="w-full max-w-md bg-surface border border-border p-10 rounded-sm shadow-2xl relative overflow-hidden">

				<div className="absolute top-0 left-0 w-full h-[4px] bg-primary"></div>

				<h1 className="text-3xl font-black text-center text-foreground mb-2 tracking-tight uppercase">
					Entrar no Dojo
				</h1>

				<p className="text-center text-xs text-foreground/40 mb-8 uppercase tracking-widest font-mono">
					Continue sua jornada na Blade Games
				</p>

				<form
					className="flex flex-col gap-4"
					onSubmit={handleLogin}
				>

					<input
						type="text"
						value={login}
						onChange={(e) => setLogin(e.target.value)}
						placeholder="Email ou Username"
						className="w-full px-4 py-3 rounded-none bg-background border border-border text-foreground placeholder-foreground/30 focus:border-primary outline-none transition-all font-sans"
						required
					/>

					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Senha"
						className="w-full px-4 py-3 rounded-none bg-background border border-border text-foreground placeholder-foreground/30 focus:border-primary outline-none transition-all font-sans"
						required
					/>

					<button
						type="submit"
						className="mt-4 bg-primary text-foreground py-4 rounded-none font-bold hover:bg-primaryHover active:scale-[0.98] transition-all shadow-md uppercase tracking-widest text-sm"
					>
						Entrar
					</button>

					<p className="text-center text-xs text-foreground/40 mt-4 uppercase tracking-widest font-mono">
						Não possui uma conta? <Link to="/cadastro" className="text-primary hover:text-primaryHover transition-all">Cadastre-se</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
export default Login;