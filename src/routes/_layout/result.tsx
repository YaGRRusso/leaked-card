import {
  Copy,
  CursorClick,
  HandPointing,
  Info,
  MagnifyingGlass,
  Question,
  Share,
  TelegramLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"

import gov from "@/assets/gov.png"
import { CommonCheckList } from "@/components/common/check-list"
import { CommonHero } from "@/components/common/hero"
import { CommonQuotes } from "@/components/common/quotes"
import { CommonTitle } from "@/components/common/title"

export const Route = createFileRoute("/_layout/result")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center gap-8 sm:gap-16 sm:py-8">
      <CommonHero
        title="Ainda bem que isso foi só um <strong>teste!</strong> Mas poderia ter sido real..."
        description="Este projeto simula a experiência de um golpe online para alertar sobre os riscos de compartilhar dados sem verificar a segurança do ambiente. Conheça as táticas dos golpistas e aprenda a se proteger."
      >
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Link to="/result" hash="infos" className="btn btn-soft btn-xs sm:btn-sm">
            <Question className="mb-1" />O que é este site?
          </Link>
          <Link to="/result" hash="strategies" className="btn btn-soft btn-xs sm:btn-sm">
            <Info className="mb-1" />
            Principais estratégias
          </Link>
          <Link to="/result" hash="share" className="btn btn-soft btn-xs sm:btn-sm">
            <Share className="mb-1" />
            Compartilhe este projeto
          </Link>
        </div>
      </CommonHero>

      <div className="-mb-6 flex w-full animate-bounce justify-center sm:-mb-14">
        <CursorClick weight="duotone" className="-mr-4 -scale-y-100 -rotate-45 text-3xl text-accent max-sm:hidden" />
        <HandPointing weight="duotone" className="-mr-4 -scale-y-100 text-3xl text-accent sm:hidden" />
      </div>

      <a
        href="https://www.gov.br/anatel/pt-br/assuntos/dicas-contra-fraudes/dicas-de-seguranca-contra-fraudes"
        target="_blank"
        className="group mockup-browser max-h-64 w-full border border-base-300 sm:max-h-96"
      >
        <div className="mockup-browser-toolbar">
          <div className="ml-2 flex w-full items-center gap-2 overflow-hidden rounded border border-input bg-base-200 px-2 py-1 text-xs text-ellipsis whitespace-nowrap transition-all group-hover:border-accent">
            <MagnifyingGlass />
            https://www.gov.br/anatel/pt-br/assuntos/dicas-contra-fraudes/dicas-de-seguranca-contra-fraudes
          </div>
        </div>
        <img src={gov} alt="gov" />
      </a>

      <div className="flex flex-col gap-4">
        <CommonTitle hash="infos" title="Afinal, o que é este site?" icon={<Question />} />
        <article className="flex flex-col gap-6 text-justify font-light tracking-wider">
          <p>
            Ao longo dos últimos anos, inúmeros golpes online têm se aproveitado da confiança, especialmente de pessoas
            menos familiarizadas com o ambiente digital. Este projeto nasceu ao ver familiares e amigos, principalmente
            idosos, compartilhando links fraudulentos. Nosso objetivo é demonstrar, de forma educativa, como ambientes
            aparentemente seguros podem esconder armadilhas perigosas. Ao entender essas estratégias, você estará melhor
            preparado para proteger seus dados.
          </p>
          <CommonQuotes>
            Você viu como foi fácil acreditar que este site era seguro? Esse é o truque dos criminosos: criar páginas
            falsas que parecem legítimas para enganar pessoas.
            <br />
            Nenhum dado foi salvo, esta simulação é apenas para ensinar. Observe como uma interface bem elaborada pode
            mascarar práticas enganosas e lembre-se: sua segurança digital começa com a verificação da autenticidade dos
            sites.
          </CommonQuotes>
          <p>
            Estar informado é a melhor defesa contra fraudes online. Compreender as táticas dos golpistas e reconhecer
            os sinais de alerta é fundamental para proteger suas informações pessoais. Esperamos que esta experiência
            esclareça como golpes são aplicados e incentive uma prática constante de verificação antes de compartilhar
            seus dados. Compartilhe esse conhecimento e ajude a promover um ambiente digital mais seguro para todos.
          </p>
        </article>
      </div>

      <div className="flex flex-col gap-4">
        <CommonTitle hash="strategies" title="Principais estratégias utilizadas pelos golpistas" icon={<Info />} />
        <CommonCheckList
          list={[
            {
              text: "<strong>Phishing:</strong> E-mails e sites falsos que imitam instituições confiáveis para coletar informações.",
            },
            {
              text: "<strong>Fraudes em Redes Sociais:</strong> Perfis falsos e ofertas tentadoras que visam roubar dados.",
            },
            {
              text: "<strong>Golpes de Suporte Técnico:</strong> Contatos que simulam assistência para resolver problemas inexistentes.",
            },
            {
              text: "<strong>Falsos Prêmios e Sorteios:</strong> Promessas de prêmios ou dinheiro que exigem a entrega de dados pessoais.",
            },
            {
              text: "<strong>Fraudes em Aplicativos de Pagamento:</strong> Solicitações fraudulentas de confirmação de transações.",
            },
            {
              text: "<strong>Design Profissional:</strong> Layouts limpos e selos de segurança falsos para transmitir credibilidade.",
            },
            {
              text: "<strong>Urgência e Alarme:</strong> Mensagens que induzem ao medo e à pressa, como alertas de vazamento de dados ou ofertas imperdíveis.",
            },
            {
              text: "<strong>Solicitação de Dados Sensíveis:</strong> Pedem informações pessoais e financeiras, como número do cartão, CPF, senha e outros dados críticos, que podem ser usados para fraudes.",
            },
          ]}
        />
      </div>

      <div className="flex flex-col gap-4 max-sm:text-center">
        <CommonTitle hash="share" title="Compartilhe este projeto e ajude a proteger mais pessoas" icon={<Share />} />
        <p className="text-sm text-muted">
          Nosso objetivo é alertar e capacitar você a identificar e evitar golpes online. Se esta experiência ajudou a
          aumentar sua consciência sobre fraudes digitais, compartilhe com amigos e familiares. Juntos, podemos
          transformar informação em proteção!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            className="btn flex-1 btn-soft btn-info"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Confira este Site: https://descubra-se-seu-cartao-vazou.netlify.app/")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo />
            Twitter
          </a>
          <a
            className="btn flex-1 btn-soft btn-success"
            href={`https://wa.me/?text=${encodeURIComponent("Confira este Site: https://descubra-se-seu-cartao-vazou.netlify.app/")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo />
            Whatsapp
          </a>
          <a
            className="btn flex-1 btn-soft btn-info"
            href={`https://t.me/share/url?url=${encodeURIComponent("https://descubra-se-seu-cartao-vazou.netlify.app/")}&text=${encodeURIComponent("Confira este Site!")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramLogo />
            Telegram
          </a>
          <button className="btn flex-1 btn-soft">
            <Copy />
            Copiar Link
          </button>
        </div>
      </div>
    </div>
  )
}
