import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function BarberRegister() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto py-4 flex items-center">
          <Link href="/" className="flex items-center text-muted-foreground hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </Link>
          <h1 className="text-2xl font-bold mx-auto pr-24 text-primary">BarberStyle</h1>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-2 border-primary/20 shadow-lg">
          <div className="h-2 gradient-bg w-full"></div>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Registro de Barbero</CardTitle>
            <CardDescription className="text-center">Crea tu cuenta de barbero para gestionar citas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input id="name" placeholder="Juan Pérez" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="barbero@ejemplo.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Número de Teléfono</Label>
              <Input id="phone" type="tel" placeholder="+52 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shop-name">Nombre de la Barbería</Label>
              <Input id="shop-name" placeholder="Barbería Estilo Urbano" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/barber/dashboard">Registrarse</Link>
            </Button>
            <div className="text-center text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/barber/login" className="text-primary underline underline-offset-4 hover:text-primary/90">
                Iniciar Sesión
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

