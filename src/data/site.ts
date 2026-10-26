/**
 * Fonte única dos dados do site. Tudo que aparece entre [colchetes] é placeholder
 * e deve ser trocado aqui (projeto conceitual para uma empresa fictícia).
 */

export const site = {
  name: 'Ronrom Clínica Felina',
  brand: 'ronrom',
  slogan: 'Medicina felina no ritmo do gato.',
  positioning:
    'A clínica de Porto Alegre feita só para gatos, onde cada etapa da visita foi pensada para reduzir o estresse.',
  // URL de produção ainda não definida; usada em sitemap, Open Graph e schema.
  url: import.meta.env.PUBLIC_SITE_URL || 'https://ronrom.example',
  locale: 'pt-BR',
  city: 'Porto Alegre',
  state: 'RS',
  concept: 'Projeto conceitual para uma empresa fictícia.',

  contact: {
    address: '[endereço]',
    neighborhood: '[bairro]',
    phone: '[telefone]',
    email: '[e-mail]',
    hours: '[horário]',
    // Somente dígitos com DDI, ex.: 5551999999999. Placeholder até haver número real.
    whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '[número]',
  },

  legal: {
    technicalLead: '[nome]',
    crmv: 'CRMV-RS [número]',
    cnpj: '[número]',
  },

  team: {
    name: '[Nome]',
    role: 'Médico(a)-veterinário(a)',
    crmv: 'CRMV-RS [número]',
    photoCaption: '[Legenda da foto: pendente]',
  },

  homeServiceAreas: '[a definir]',
} as const;

export type LifeStage = 'filhote' | 'adulto' | 'idoso';

export const lifeStageLabels: Record<LifeStage, string> = {
  filhote: 'Filhote',
  adulto: 'Adulto',
  idoso: 'Idoso',
};

export interface Service {
  id: string;
  name: string;
  price: string;
  stages: LifeStage[];
  summary: string;
  forWhom: string;
  includes: string[];
  excludes: string[];
}

// Valores fictícios, apenas de referência.
export const services: Service[] = [
  {
    id: 'consulta-felina',
    name: 'Consulta felina',
    price: 'R$ 220',
    stages: ['filhote', 'adulto', 'idoso'],
    summary: 'Consulta de 40 minutos, sem pressa, com plano por escrito.',
    forWhom: 'Gatos de qualquer idade, para avaliação clínica ou retorno.',
    includes: ['40 minutos de consulta', 'Exame feito onde o gato estiver mais à vontade', 'Plano por e-mail e lembretes'],
    excludes: ['Exames complementares', 'Medicamentos'],
  },
  {
    id: 'check-up',
    name: 'Check-up por fase de vida',
    price: 'a partir de R$ 490',
    stages: ['filhote', 'adulto', 'idoso'],
    summary: 'Avaliação preventiva ajustada à fase de vida do gato.',
    forWhom: 'Filhotes recém-adotados, adultos saudáveis e idosos em acompanhamento.',
    includes: ['Consulta completa', 'Plano preventivo por escrito'],
    excludes: ['Exames adicionais além dos informados antes do procedimento', 'Medicamentos'],
  },
  {
    id: 'vacinas-vermifugo',
    name: 'Vacinas e vermífugo',
    price: 'sob consulta',
    stages: ['filhote', 'adulto'],
    summary: 'Protocolo definido na consulta, conforme a história do gato.',
    forWhom: 'Filhotes e adultos com protocolo a iniciar ou atualizar.',
    includes: ['Avaliação do protocolo adequado', 'Aplicação com manejo de baixo estresse'],
    excludes: ['Exames não relacionados ao protocolo'],
  },
  {
    id: 'programa-senior',
    name: 'Programa Sênior',
    price: 'R$ 190/mês',
    stages: ['idoso'],
    summary: 'Acompanhamento contínuo para gatos a partir dos 10 anos.',
    forWhom: 'Gatos a partir dos 10 anos.',
    includes: ['Avaliação inicial', 'Plano de acompanhamento', 'Retornos', 'Canal para dúvidas'],
    excludes: ['Exames extras', 'Medicamentos', 'Internação'],
  },
  {
    id: 'cirurgia-odontologia',
    name: 'Cirurgia e odontologia',
    price: 'orçamento após avaliação',
    stages: ['filhote', 'adulto', 'idoso'],
    summary: 'Indicação e orçamento definidos depois da avaliação clínica.',
    forWhom: 'Gatos com indicação cirúrgica ou odontológica após consulta.',
    includes: ['Avaliação prévia', 'Orçamento informado antes do procedimento'],
    excludes: ['Procedimentos sem avaliação prévia'],
  },
  {
    id: 'atendimento-em-casa',
    name: 'Atendimento em casa',
    price: 'R$ 320 + deslocamento',
    stages: ['filhote', 'adulto', 'idoso'],
    summary: 'Vacinas, coletas e consultas simples, no conforto de casa.',
    forWhom: 'Gatos para quem sair de casa é o maior problema.',
    includes: ['Vacinas', 'Coletas', 'Consultas simples'],
    excludes: ['Exames de imagem', 'Cirurgias'],
  },
];

export const servicesNote =
  'Valores de referência. Exames e medicamentos extras são informados antes de qualquer procedimento.';

export const nav = [
  { href: '/a-visita', label: 'A visita' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/gatos-idosos', label: 'Gatos idosos' },
  { href: '/guias', label: 'Guias' },
  { href: '/sobre', label: 'Sobre' },
];

export const visitSteps = [
  {
    id: 'antes',
    title: 'Antes',
    short: 'Guia para acostumar seu gato à caixa de transporte.',
    long: 'Depois do agendamento, enviamos um guia para acostumar seu gato à caixa de transporte. Assim a saída de casa deixa de ser uma surpresa.',
  },
  {
    id: 'chegada',
    title: 'Chegada',
    short: 'Caixa em prateleira alta, coberta, em sala só de gatos.',
    long: 'A caixa fica numa prateleira alta, coberta, em uma sala de espera só de gatos, sem latidos e sem cheiro de cães.',
  },
  {
    id: 'consulta',
    title: 'Consulta',
    short: 'Exame onde ele estiver mais à vontade, até dentro da caixa.',
    long: 'O exame acontece onde o gato estiver mais à vontade, até dentro da caixa, sem contenção à força.',
  },
  {
    id: 'conversa',
    title: 'Conversa',
    short: 'Explicamos sem jargão e sem pressa.',
    long: 'Com 40 minutos de consulta, sobra tempo para explicar o que foi visto sem jargão e sem pressa.',
  },
  {
    id: 'depois',
    title: 'Depois',
    short: 'Plano por e-mail e lembretes.',
    long: 'Você recebe o plano por e-mail e lembretes dos próximos passos.',
  },
];

export const principles = [
  'Respeitamos o limite do gato.',
  'Pausamos quando ele precisa.',
  'Preferimos remarcar a forçar.',
  'Explicamos antes de fazer.',
];

export const bring = [
  'Caixa de transporte com uma manta de casa',
  'Exames anteriores',
  'Lista de remédios',
  'Vídeos do comportamento',
];

export const spaceItems = [
  'Prateleiras para a caixa ficar no alto',
  'Consultório com piso antiderrapante e luz indireta',
  'Difusor de feromônio felino',
  'Toalhas aquecidas',
  'Entrada e saída sem cruzar com outros animais',
];

export const seniorSigns = [
  'Bebe mais água',
  'Urina mais',
  'Perdeu peso',
  'Deixou de pular',
  'Mau hálito',
];

export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq: FaqItem[] = [
  {
    q: 'E se meu gato tiver uma emergência fora do horário?',
    a: 'A Ronrom não tem plantão noturno. Em emergências, procure um hospital veterinário 24 horas sem esperar o agendamento.',
  },
  {
    q: 'Meu gato não entra na caixa de transporte. E agora?',
    a: 'Depois do agendamento enviamos um guia para acostumar o gato à caixa. Se mesmo assim for difícil, conte na hora de agendar: podemos orientar o melhor caminho, inclusive o atendimento em casa para alguns casos.',
  },
  {
    q: 'Vocês atendem cães?',
    a: 'Não. A Ronrom é exclusiva para gatos, e é isso que mantém a sala de espera sem latidos e sem cheiro de cães.',
  },
  {
    q: 'Por que a consulta é mais longa?',
    a: 'Porque o gato precisa de tempo para se acostumar ao ambiente, e você precisa de tempo para entender o que está sendo feito. São 40 minutos, em horários espaçados.',
  },
  {
    q: 'Quais são as formas de pagamento?',
    a: '[confirmar formas de pagamento]',
  },
];

export const emergencyText =
  'É uma emergência? Não espere pelo agendamento: procure um hospital veterinário 24 horas.';

export const footerLinks = [
  { href: '/a-visita', label: 'A visita' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/gatos-idosos', label: 'Gatos idosos' },
  { href: '/atendimento-em-casa', label: 'Atendimento em casa' },
  { href: '/guias', label: 'Guias' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/agendar', label: 'Agendar' },
  { href: '/privacidade', label: 'Privacidade' },
];

/** Monta o link do WhatsApp com mensagem pré-preenchida. */
export function whatsappUrl(opts: { service?: string; catName?: string; age?: string } = {}): string {
  const service = opts.service ?? '[serviço]';
  const cat = opts.catName ?? '[nome]';
  const age = opts.age ?? '[idade]';
  const text = `Olá! Quero agendar ${service} para meu gato ${cat}, de ${age}.`;
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Ícone de linha de cada serviço (nomes de Icon.astro). */
export const serviceIcons: Record<string, 'stethoscope' | 'clipboard' | 'syringe' | 'heart' | 'tooth' | 'home'> = {
  'consulta-felina': 'stethoscope',
  'check-up': 'clipboard',
  'vacinas-vermifugo': 'syringe',
  'programa-senior': 'heart',
  'cirurgia-odontologia': 'tooth',
  'atendimento-em-casa': 'home',
};

/** Ícone de cada etapa da visita. */
export const visitStepIcons: Record<string, 'carrier' | 'door' | 'stethoscope' | 'chat' | 'mail'> = {
  antes: 'carrier',
  chegada: 'door',
  consulta: 'stethoscope',
  conversa: 'chat',
  depois: 'mail',
};

/** Itens do espaço, com ícone. */
export const spaceFeatures: { icon: 'shelf' | 'sun' | 'drop' | 'warm' | 'door'; text: string }[] = [
  { icon: 'shelf', text: 'Prateleiras para a caixa ficar no alto' },
  { icon: 'sun', text: 'Consultório com piso antiderrapante e luz indireta' },
  { icon: 'drop', text: 'Difusor de feromônio felino' },
  { icon: 'warm', text: 'Toalhas aquecidas' },
  { icon: 'door', text: 'Entrada e saída sem cruzar com outros animais' },
];
