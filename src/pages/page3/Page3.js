import { useStateAsObject } from '../../utils/Utils'
import './Page3.css'

export function Page3() {
    const desafios = useStateAsObject(
        [
            <>
                <p style={{fontWeight: 'bold', color: 'var(--foursys-orange)', fontSize: '25px'}}>
                    FAZER UMA APRESENTAÇÃO UTILIZANDO O REACT WEB
                </p>
                <p style={{marginBlock: '1rem', fontWeight: 'bold'}}>
                    O DESAFIO
                </p>
                <p>
                    Concluir, de uma só vez, duas demandas para readequação dos 
                    sistemas internos destinados ao IRPF 2021/2022 em um grande banco brasileiro. 
                    O desafio estava na execução do projeto que levou em consideração adequações 
                    no sistema mainframe e na baixa plataforma (codificado em C#) para atualização 
                    do atual formulário do IRPF e, ao mesmo tempo, superando um grande gap na 
                    infraestrutura devido a indisponibilidade de ambiente de desenvolvimento.
                </p>
            </>,
            2,
            3
        ]
    )
    return(
        <div className='Page3'>
            <div className='container'>
                <div className="header">
                    <h2>CASES DE<br/><span style={{color: 'var(--foursys-orange)'}}>SUCESSO</span></h2>
                    <p>
                        Conheça abaixo como o Daniel implanta, com sucesso, 
                        desafios utilizando inovação e tecnologia em diversos segmentos 
                        de negócio e diferentes setores do mercado.
                    </p>
                </div>
                {
                    desafios.get().map(
                        $0 => (
                            <div className='desafio'>
                                {$0}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}