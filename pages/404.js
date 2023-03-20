import Link from "../src/components/Link";
import PageTitle from "../src/screens/pageHead";

export default function Page404() {
  return (
    <>
      <PageTitle>404 - Alura Pagina Não Encontrada</PageTitle>
      <div>
        <h1>Você se perdeu e caiu na página 404 :O</h1>
        <Link href="/">Ir para home</Link>
      </div>
    </>
  );
}
