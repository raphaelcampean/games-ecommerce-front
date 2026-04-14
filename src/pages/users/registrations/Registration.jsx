import api from "../../../services/api";
import { useRef } from "react";

function Registration() {
	const inputNameRef = useRef();
	const inputEmailRef = useRef();
	const inputPasswordRef = useRef();
	const inputUsernameRef = useRef();

	
	async function createUser(event) {
		event.preventDefault();

		const newUser = {
			name: inputNameRef.current.value,
			email: inputEmailRef.current.value,
			password: inputPasswordRef.current.value,
			username: inputUsernameRef.current.value
		};

		try {
			const response = await api.post('/users', newUser);
			alert('Usuário cadastrado com sucesso!');
			
			event.target.reset(); 
				
		} catch (error) {
			console.error("Erro ao cadastrar usuário:", error);
			alert('Erro no cadastro. Verifique os dados.');
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center px-6">
			<div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
				<h1 className="text-3xl font-black text-center text-white mb-8">
					Crie sua Conta
				</h1>
					<form className="flex flex-col gap-4" onSubmit={createUser}>
						<input ref={inputNameRef} type="text" placeholder="Nome" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-400  focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all" required />
						
						<input ref={inputEmailRef} type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-400  focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all" required />

						<input ref={inputPasswordRef} type="password" placeholder="Senha" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-400  focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all" required />

						<input ref={inputUsernameRef} type="text" placeholder="Username" className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-400  focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all" required />

						<button type="submit" className="mt-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-4 rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-purple-900/40 uppercase tracking-widest text-sm" > 
							🚀 Cadastrar
						</button>
					</form>
			</div>
		</div>
	);
}

export default Registration;