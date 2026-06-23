import api from "../../../services/api";
import { useState, useEffect } from "react";

function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const [emailError, setEmailError] = useState(false);
	const [usernameError, setUsernameError] = useState(false);

	async function createUser(event) {
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

	const verifyEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleEmailChange = (event) => {
		const value = event.target.value;

		setEmail(value);
		setEmailError(!verifyEmail(value));
	};

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	async function verifyUsername(username) {
		try {
			const response = await api.get(
				`/users/verify-username/${username}`
			);

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
		<div className="flex items-center justify-center px-6">
			<div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
				<h1 className="text-3xl font-black text-center text-white mb-8">
					Crie sua Conta
				</h1>

				<form className="flex flex-col gap-4" onSubmit={createUser}>
					<input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all" required />
					
					<input value={email} onChange={handleEmailChange} type="email" placeholder="Email" className={`w-full px-4 py-3 rounded-xl bg-black/30 border ${
							emailError
								? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
								: "border-white/10 focus:border-purple-400 focus:ring-purple-500/30"
						} text-white placeholder-gray-400 focus:ring-2 outline-none transition-all`}
						required
					/>

					<p className={`text-red-500 text-sm ${emailError ? "block" : "hidden"}`}>
						Email inválido.
					</p>

					<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all" required/>

					<input value={username} onChange={handleUsernameChange} type="text" placeholder="Username" className={`w-full px-4 py-3 rounded-xl bg-black/30 border ${
							usernameError
								? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
								: "border-white/10 focus:border-purple-400 focus:ring-purple-500/30"
						} text-white placeholder-gray-400 focus:ring-2 outline-none transition-all`}
						required
					/>

					<p className={`text-red-500 text-sm ${usernameError ? "block" : "hidden"}`}>
						Username já está em uso.
					</p>

					<button type="submit" className="mt-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-purple-900/40 uppercase tracking-widest text-sm">
						🚀 Cadastrar
					</button>
				</form>
			</div>
		</div>
	);
}

export default Registration;