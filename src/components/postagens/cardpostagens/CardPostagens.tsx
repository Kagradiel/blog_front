import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex space-x-4">
                    <div>
                        <img
                            src={postagem.usuario?.foto}
                            alt={postagem.usuario?.nome}
                            className="rounded-full bg-zinc-400 h-12 w-12"
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold dark:text-white">{postagem.usuario?.nome}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-200">@{postagem.usuario?.nome}</div>
                    </div>
                </div>
                <div>
                    
                       <Link to={`/deletarpostagem/${postagem.id}`} className="text-red-500 border py-1 px-2 border-red-300 
                       rounded-md">
                        X
                        </Link>
                        
                    
                    
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="text-sm text-gray-800 dark:text-gray-200">
                    {postagem.texto}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 pt-2">
                    Tema: {postagem.tema?.descricao}
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 pt-1">
                    {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}
                </div>
            </div>
            <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 p-4">
                    <Link to={`/editarpostagem/${postagem.id}`} className="text-white bg-black hover:bg-zinc-600 
                    py-2 px-4 rounded">
                        Editar
                    </Link>                    
            </div>
        </div>
    )
}

export default CardPostagem
