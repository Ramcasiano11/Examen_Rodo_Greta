import './search.css';

interface Props {
    alEscribir: (valor: string) => void;
}

const Search = ({ alEscribir }: Props) => {
    return (
        <>
            <input 
                className='search'
                type="text" 
                placeholder="Buscar Digimon..." 
                onChange={(e) => alEscribir(e.target.value)}
            />
        </>
    )
}

export default Search; 