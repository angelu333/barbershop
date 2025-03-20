"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Calendar, LogOut, Save, Search, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ClientProfile() {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "Miguel Moreno",
    email: "miguel@ejemplo.com",
    phone: "+52 (555) 123-4567",
    address: "Calle Principal #123, Ciudad de México",
    preferences: "Prefiero cortes fade y barba recortada. Me gusta que me ofrezcan bebidas durante el servicio.",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    setIsEditing(false)
    toast({
      title: "Perfil actualizado",
      description: "Tus datos han sido guardados correctamente.",
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-blue-50">
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">BarberStyle</h1>
          <div className="flex items-center gap-4">
            <div className="text-sm text-right">
              <div className="font-medium">Miguel Moreno</div>
              <div className="text-muted-foreground">Cliente</div>
            </div>
            <Button variant="ghost" size="icon" className="text-accent">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-accent">
              <Link href="/">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r hidden md:block bg-white">
          <div className="p-4 space-y-4">
            <div className="font-medium text-lg text-accent">Panel de Cliente</div>
            <nav className="space-y-1">
              <Link
                href="/client/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Calendar className="h-5 w-5" />
                <span>Mis Citas</span>
              </Link>
              <Link
                href="/client/find-barber"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Search className="h-5 w-5" />
                <span>Buscar Barbero</span>
              </Link>
              <Link
                href="/client/profile"
                className="flex items-center gap-3 px-3 py-2 rounded-md bg-accent text-accent-foreground"
              >
                <User className="h-5 w-5" />
                <span>Perfil</span>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-accent-foreground">Mi Perfil</h2>
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Editar Perfil
                </Button>
              ) : (
                <Button onClick={handleSave} className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Save className="mr-2 h-4 w-4" />
                  Guardar Cambios
                </Button>
              )}
            </div>

            <Card className="border-2 border-accent/20 shadow-md">
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
                <CardDescription>Gestiona tus datos personales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  {isEditing ? (
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50">{formData.name}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  {isEditing ? (
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50">{formData.email}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Número de Teléfono</Label>
                  {isEditing ? (
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50">{formData.phone}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  {isEditing ? (
                    <Input id="address" name="address" value={formData.address} onChange={handleChange} />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50">{formData.address}</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 shadow-md">
              <CardHeader>
                <CardTitle>Preferencias</CardTitle>
                <CardDescription>Personaliza tu experiencia</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="preferences">Preferencias de Servicio</Label>
                  {isEditing ? (
                    <Textarea
                      id="preferences"
                      name="preferences"
                      value={formData.preferences}
                      onChange={handleChange}
                      rows={4}
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50 min-h-[100px]">{formData.preferences}</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 shadow-md">
              <CardHeader>
                <CardTitle>Seguridad</CardTitle>
                <CardDescription>Gestiona tu contraseña</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Contraseña Actual</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva Contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Nueva Contraseña</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </>
                ) : (
                  <div className="p-2 border rounded-md bg-muted/50">••••••••••••</div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

