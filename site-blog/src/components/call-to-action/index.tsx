import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { PT_Sans_Caption } from "next/font/google";
import Image from "next/image";

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
})

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700 relative">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="absolute -top-5">
            <Image src="/store.svg" alt="Store" width={60} height={60} />
          </div>
          
          <h2 className={`${ptSansCaption.className} text-gray-100 text-balance text-heading-xl`}>
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>
          
          <Button variant="primary" asChild className="mt-6">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}