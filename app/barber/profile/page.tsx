"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, LogOut, Save, Settings, User, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function BarberProfile() {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "Juan Pérez",
    email: "juan@ejemplo.com",
    phone: "+52 (555) 123-4567",
    address: "Av. Reforma #123, Ciudad de México",
    shopName: "Barbería Estilo Urbano",
    shopAddress: "Calle Principal #456, Ciudad de México",
    experience: "8 años",
    specialties: "Cortes fade, diseños personalizados, arreglo de barba",
    bio: "Barbero profesional con más de 8 años de experiencia. Especializado en cortes modernos y clásicos. Certificado en técnicas de barbería avanzada.",
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
              <div className="font-medium">Juan Pérez</div>
              <div className="text-muted-foreground">ID de Barbero: #12345</div>
            </div>
            <Button variant="ghost" size="icon" className="text-primary">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-primary">
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
            <div className="font-medium text-lg text-primary">Panel de Control</div>
            <nav className="space-y-1">
              <Link
                href="/barber/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Calendar className="h-5 w-5" />
                <span>Agenda</span>
              </Link>
              <Link
                href="/barber/clients"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Users className="h-5 w-5" />
                <span>Clientes</span>
              </Link>
              <Link
                href="/barber/working-hours"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <Clock className="h-5 w-5" />
                <span>Horarios</span>
              </Link>
              <Link
                href="/barber/profile"
                className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground"
              >
                <User className="h-5 w-5" />
                <span>Perfil</span>
              </Link>
              <Link
                href="/barber/gallery"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span>Galería</span>
              </Link>
            </nav>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Mi Perfil</h2>
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} className="bg-primary hover:bg-primary/90">
                  Editar Perfil
                </Button>
              ) : (
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                  <Save className="mr-2 h-4 w-4" />
                  Guardar Cambios
                </Button>
              )}
            </div>

            <Card className="border-2 border-primary/20 shadow-md">
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
                  <Label htmlFor="address">Dirección Personal</Label>
                  {isEditing ? (
                    <Input id="address" name="address" value={formData.address} onChange={handleChange} />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50">{formData.address}</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-md">
              <CardHeader>
                <CardTitle>Información de la Barbería</CardTitle>
                <CardDescription>Datos de tu negocio</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="shopName">Nombre de la Barbería</Label>
                  {isEditing ? (
                    <Input id="shopName" name="shopName" value={formData.shopName} onChange={handleChange} />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50">{formData.shopName}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shopAddress">Dirección de la Barbería</Label>
                  {isEditing ? (
                    <Input id="shopAddress" name="shopAddress" value={formData.shopAddress} onChange={handleChange} />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50">{formData.shopAddress}</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-md">
              <CardHeader>
                <CardTitle>Perfil Profesional</CardTitle>
                <CardDescription>Información sobre tu experiencia y especialidades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Años de Experiencia</Label>
                  {isEditing ? (
                    <Input id="experience" name="experience" value={formData.experience} onChange={handleChange} />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50">{formData.experience}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialties">Especialidades</Label>
                  {isEditing ? (
                    <Input id="specialties" name="specialties" value={formData.specialties} onChange={handleChange} />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50">{formData.specialties}</div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Biografía</Label>
                  {isEditing ? (
                    <Textarea id="bio" name="bio" value={formData.bio} onChange={handleChange} rows={4} />
                  ) : (
                    <div className="p-2 border rounded-md bg-muted/50 min-h-[100px]">{formData.bio}</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-md">
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

