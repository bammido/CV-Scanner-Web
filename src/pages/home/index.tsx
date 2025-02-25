import { useState } from "react";
import Header from "../../components/header";
import DetailsSection from "./components/detailsSection";
import UploadSection from "./components/uploadSection";
import CVResume from "./components/cvResume";

const teste = {
    "data": {
        "categories": [
            {
                "description": "Estrutura e Formatação",
                "itens": [
                    {
                        "item": "organization",
                        "values": {
                            "score": 9,
                            "value": true,
                            "observation": "O currículo está muito bem organizado e fácil de ler."
                        }
                    },
                    {
                        "item": "formatting",
                        "values": {
                            "score": 9,
                            "value": true,
                            "observation": "A formatação é clara e profissional, utilizando negrito, marcadores e espaçamento adequado para destacar informações importantes."
                        }
                    },
                    {
                        "item": "keywords",
                        "values": {
                            "score": 8,
                            "value": true,
                            "observation": "O currículo inclui palavras-chave relevantes para a área de desenvolvimento web, como 'React', 'Node.js', 'Next.js', 'Typescript', 'AWS' e 'CI/CD', que podem ajudar na indexação por sistemas de recrutamento."
                        }
                    }
                ]
            },
            {
                "description": "Informações Pessoais",
                "itens": [
                    {
                        "item": "contact",
                        "values": {
                            "score": 10,
                            "value": true,
                            "observation": "Os dados de contato são facilmente encontrados e completos, incluindo endereço de e-mail profissional e número de telefone."
                        }
                    },
                    {
                        "item": "persolnalResume",
                        "values": {
                            "score": 8,
                            "value": true,
                            "observation": "O perfil do candidato é conciso e destaca suas habilidades e experiência relevantes para a área de desenvolvimento web."
                        }
                    }
                ]
            },
            {
                "description": "Experiência Profissional",
                "itens": [
                    {
                        "item": "relevance",
                        "values": {
                            "score": 9,
                            "value": true,
                            "observation": "As experiências listadas no currículo são relevantes para a área de desenvolvimento web full stack, incluindo projetos com React, Node.js, Next.js e AWS."
                        }
                    },
                    {
                        "item": "achievements",
                        "values": {
                            "score": 8,
                            "value": true,
                            "observation": "O currículo demonstra algumas conquistas, como a implementação de novas funcionalidades, design de interfaces intuitivas e integração de APIs."
                        }
                    },
                    {
                        "item": "actionVerbs",
                        "values": {
                            "score": 8,
                            "value": true,
                            "observation": "O candidato utiliza verbos de ação fortes, como 'desenvolvido', 'implementado', 'integrado' e 'criado', para descrever suas responsabilidades e realizações."
                        }
                    }
                ]
            },
            {
                "description": "Formação Acadêmica",
                "itens": [
                    {
                        "item": "relevance",
                        "values": {
                            "score": 9,
                            "value": true,
                            "observation": "A formação acadêmica do candidato é relevante para a área de desenvolvimento web, com foco em Ciência da Computação e bootcamp em Desenvolvimento Web."
                        }
                    },
                    {
                        "item": "projects",
                        "values": {
                            "score": 7,
                            "value": true,
                            "observation": "O currículo menciona a realização de projetos acadêmicos, mas seria interessante incluir mais detalhes sobre os projetos realizados, como os objetivos, as tecnologias utilizadas e os resultados obtidos."
                        }
                    }
                ]
            },
            {
                "description": "Habilidades",
                "itens": [
                    {
                        "item": "hardSkills",
                        "values": {
                            "score": 9,
                            "value": true,
                            "observation": "O currículo demonstra domínio de diversas tecnologias e ferramentas relevantes para desenvolvimento web full stack, incluindo React, Node.js, Next.js, Typescript, AWS, Docker, HTML, CSS, JavaScript, React Hooks, Jest, Sequelize, Git, Gitflow, TailwindCSS e Styled-components."
                        }
                    },
                    {
                        "item": "softSkills",
                        "values": {
                            "score": 7,
                            "value": true,
                            "observation": "O currículo demonstra algumas habilidades soft skills importantes para a área de desenvolvimento web, como trabalho em equipe, comunicação eficiente e proatividade. Seria interessante incluir mais detalhes sobre essas habilidades, como exemplos específicos de situações em que essas habilidades foram utilizadas."
                        }
                    }
                ]
            },
            {
                "description": "Alinhamento com o ATS",
                "itens": [
                    {
                        "item": "keywords",
                        "values": {
                            "score": 8,
                            "value": true,
                            "observation": "O currículo contém palavras-chave relevantes para sistemas de recrutamento, como 'React', 'Node.js', 'Next.js', 'Typescript', 'AWS', 'CI/CD', 'Integração de APIs', 'Design de Interfaces' e 'Desenvolvimento Web'. "
                        }
                    },
                    {
                        "item": "formatting",
                        "values": {
                            "score": 9,
                            "value": true,
                            "observation": "A formatação do currículo é adequada para sistemas de recrutamento, com uso de marcadores, negrito e espaçamento adequado para destacar informações importantes."
                        }
                    },
                    {
                        "item": "repetition",
                        "values": {
                            "score": 8,
                            "value": true,
                            "observation": "O currículo evita a repetição excessiva de palavras-chave, utilizando sinônimos e frases diferentes para descrever as mesmas habilidades."
                        }
                    }
                ]
            }
        ]
    }
}

interface IResumeCategoryItemValues {
  score: number;
  value: boolean;
  observation: string;
}

interface IResumeCategoryItem {
    item: string;
    values: IResumeCategoryItemValues
}

interface IResumeCategory {
    description: string;
    itens: IResumeCategoryItem[]
}

export interface ICVResume {
  data: {
    categories: IResumeCategory[]
  }
}

export default function Home() {
  const [cvResume, setCvResume] = useState<ICVResume | null>(null)

  function resetResume(){
    setCvResume(null)
  }
  
  return <div className="pt-20 flex flex-col">
    <Header />
    <div className="flex flex-col p-8 pt-20 gap-14">
        {!cvResume && <>
          <UploadSection handleCVResume={(resume: ICVResume) => setCvResume(resume)} />
          <DetailsSection />
        </>}
        {cvResume && <CVResume resetResume={resetResume} resume={cvResume} />}
    </div>

  </div>
}