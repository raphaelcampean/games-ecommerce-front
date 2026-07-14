import api from "../../../services/api";
import { useState, useEffect } from "react";

function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const [emailError, setEmailError] = useState(false);
	const [usernameError, setUsernameError] = useState(false);

	async function createUser(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			await api.post('/users', {
				name,
				email,
				password,
				username
			});

			alert('Usuário cadastrado com sucesso!');

			setName('');
			setEmail('');
			setPassword('');
			setUsername('');

		} catch (error) {
			console.error("Erro ao cadastrar usuário:", error);
			alert('Erro no cadastro. Verifique os dados.');
		}
	}

	const verifyEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		setEmail(value);
		setEmailError(!verifyEmail(value));
	};

	const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};

	async function verifyUsername(username: string): Promise<boolean> {
		try {
			const response = await api.get(`/users/verify-username/${username}`);

			return response.data.isAvailable;

		} catch (error) {
			console.error("Erro ao verificar username:", error);
			return false;
		}
	}

	useEffect(() => {
		if (username.length < 3) {
			setUsernameError(false);
			return;
		}

		const timeout = setTimeout(async () => {
			const available = await verifyUsername(username);

			setUsernameError(!available);
		}, 500);

		return () => clearTimeout(timeout);

	}, [username]);

	return (
		<div className="flex items-center justify-center px-6 min-h-[80vh]">
			<div className="w-full max-w-md bg-surface border border-border p-10 rounded-sm shadow-2xl relative overflow-hidden">

				<div className="absolute top-0 left-0 w-full h-[4px] bg-primary"></div>

				<h1 className="text-3xl font-black text-center text-foreground mb-2 tracking-tight uppercase">
					Entrar no Dojo
				</h1>

				<p className="text-center text-xs text-foreground/40 mb-8 uppercase tracking-widest font-mono">
					Inicie sua jornada na Blade Games
				</p>

				<form className="flex flex-col gap-4" onSubmit={createUser}>

					<input 
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						placeholder="Nome"
						className="w-full px-4 py-3 rounded-none bg-background border border-border text-foreground placeholder-foreground/30 focus:border-primary outline-none transition-all font-sans"
						required
					/>

					<input 
						value={email}
						onChange={handleEmailChange}
						type="email"
						placeholder="Email"
						className={`w-full px-4 py-3 rounded-none bg-background border ${emailError ? "border-primary focus:border-primary" : "border-border focus:border-primary"} text-foreground placeholder-foreground/30 outline-none transition-all font-sans`}
						required
					/>

					<p className={`text-primary text-xs font-mono tracking-wide uppercase ${emailError ? "block" : "hidden"}`}>
						⚠️ Email inválido ou desonrado.
					</p>

					<input 
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Senha"
						className="w-full px-4 py-3 rounded-none bg-background border border-border text-foreground placeholder-foreground/30 focus:border-primary outline-none transition-all font-sans"
						required
					/>

					<input 
						value={username}
						onChange={handleUsernameChange}
						type="text"
						placeholder="Alcunha (Username)"
						className={`w-full px-4 py-3 rounded-none bg-background border ${usernameError ? "border-primary focus:border-primary" : "border-border focus:border-primary"} text-foreground placeholder-foreground/30 outline-none transition-all font-sans`}
						required
					/>

					<p className={`text-primary text-xs font-mono tracking-wide uppercase ${usernameError ? "block" : "hidden"}`}>
						⚠️ Este nome já pertence a outro guerreiro.
					</p>

					<button 
						type="submit"
						className="mt-4 bg-primary text-foreground py-4 rounded-none font-bold hover:bg-primaryHover active:scale-[0.98] transition-all shadow-md uppercase tracking-widest text-sm"
					>
						Forjar Cadastro
					</button>

				</form>
			</div>
		</div>
	);
}

export default Registration;