import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const Search = () => {
  const router = useRouter();
  const query = router.query.q as string;

  const handleSearch = useCallback((event: React.FormEvent) => {
    event.preventDefault();

    if (query.trim()) {
      router.push(`/blog?q=${encodeURIComponent(query)}`);
    }
  }, [query]);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, { shallow: true });

    // shallow: true evita que a página seja recarregada, permitindo apenas atualizar a URL
  }

  return (
    <form onSubmit={handleSearch} className="relative group">
      <SearchIcon 
        className={cn(
          "text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-300", 
          query ? "text-blue-300" : "" 
        )}
      />
      {
        // cn é função que recebe o primeiro parâmetro um estilo estático (default) e o segundo parâmetro um outro estilo que pode ser aplicado de forma condicional, é melhor usar o cn do que o próprio template strings. Se formos aplicar esses estilos condicionalmente é com tailwind e shadcn é sempre melhor optar pelo uso do cn.
      }

      <input 
        type="text" 
        placeholder="Buscar"
        onChange={handleQueryChange}
        className="h-10 w-72 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm" />
    </form>
  );
}