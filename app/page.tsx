import Link from "next/link"
import { Scissors, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto py-4">
          <h1 className="text-3xl font-bold text-primary">BarberStyle</h1>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent gradient-bg">
              Bienvenido a BarberStyle
            </h2>
            <p className="text-muted-foreground mt-2 text-lg">Elige tu rol para continuar</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover border-2 border-primary/20 overflow-hidden">
              <div className="h-2 gradient-bg w-full"></div>
              <CardHeader className="text-center">
                <Scissors className="w-16 h-16 mx-auto mb-2 text-primary" />
                <CardTitle className="text-2xl">Soy Barbero</CardTitle>
                <CardDescription className="text-base">Administra tu agenda y citas</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p>Crea tu perfil, establece tus horarios y gestiona las citas de tus clientes.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Link href="/barber/login">Continuar como Barbero</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="card-hover border-2 border-accent/30 overflow-hidden">
              <div className="h-2 bg-accent w-full"></div>
              <CardHeader className="text-center">
                <User className="w-16 h-16 mx-auto mb-2 text-accent" />
                <CardTitle className="text-2xl">Soy Cliente</CardTitle>
                <CardDescription className="text-base">Reserva citas con tu barbero favorito</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p>Encuentra a tu barbero, reserva citas y administra tus reservaciones.</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/client/login">Continuar como Cliente</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t bg-white py-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <div className="mb-2 text-primary font-bold text-lg">BarberStyle</div>
          <div>&copy; {new Date().getFullYear()} BarberStyle. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}

