"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, LogOut, Plus, Settings, Trash2, Upload, User, Users, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function BarberGallery() {
  const { toast } = useToast()
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("fade")

  // Datos de ejemplo para la galería
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      imageUrl: "/placeholder.svg?height=300&width=300",
      title: "Fade Clásico",
      description: "Corte fade con degradado suave y textura en la parte superior",
      category: "fade",
      date: "15/03/2023",
    },
    {
      id: 2,
      imageUrl: "/placeholder.svg?height=300&width=300",
      title: "Pompadour Moderno",
      description: "Estilo clásico actualizado con volumen y definición",
      category: "classic",
      date: "20/02/2023",
    },
    {
      id: 3,
      imageUrl: "/placeholder.svg?height=300&width=300",
      title: "Barba Definida",
      description: "Recorte de barba con líneas precisas y forma perfecta",
      category: "beard",
      date: "05/03/2023",
    },
    {
      id: 4,
      imageUrl: "/placeholder.svg?height=300&width=300",
      title: "Fade con Diseño",
      description: "Corte fade con diseño geométrico personalizado",
      category: "design",
      date: "10/03/2023",
    },
    {
      id: 5,
      imageUrl: "/placeholder.svg?height=300&width=300",
      title: "Corte Texturizado",
      description: "Estilo moderno con mucha textura y movimiento natural",
      category: "modern",
      date: "01/03/2023",
    },
    {
      id: 6,
      imageUrl: "/placeholder.svg?height=300&width=300",
      title: "Fade Alto",
      description: "Fade alto con transición suave y volumen en la parte superior",
      category: "fade",
      date: "25/02/2023",
    },
  ])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)

      // Crear URL para previsualización
      const fileUrl = URL.createObjectURL(file)
      setPreviewUrl(fileUrl)
    }
  }

  const handleUpload = () => {
    if (!selectedFile || !description) {
      toast({
        title: "Error",
        description: "Por favor selecciona una imagen y añade una descripción",
        variant: "destructive",
      })
      return
    }

    // Simular carga de imagen
    const newItem = {
      id: galleryItems.length + 1,
      imageUrl: previewUrl || "/placeholder.svg?height=300&width=300",
      title: selectedFile.name.split(".")[0],
      description: description,
      category: category,
      date: new Date().toLocaleDateString("es-ES"),
    }

    setGalleryItems([newItem, ...galleryItems])
    setUploadDialogOpen(false)
    setSelectedFile(null)
    setPreviewUrl(null)
    setDescription("")

    toast({
      title: "Imagen subida",
      description: "Tu corte ha sido añadido a la galería correctamente",
    })
  }

  const handleDelete = (id: number) => {
    setGalleryItems(galleryItems.filter((item) => item.id !== id))
    toast({
      title: "Imagen eliminada",
      description: "La imagen ha sido eliminada de tu galería",
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
                className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <User className="h-5 w-5" />
                <span>Perfil</span>
              </Link>
              <Link
                href="/barber/gallery"
                className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary text-primary-foreground"
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
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-primary">Mi Galería de Cortes</h2>
              <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Upload className="mr-2 h-4 w-4" />
                    Subir Nuevo Corte
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Subir Nuevo Corte</DialogTitle>
                    <DialogDescription>Sube una foto de tu trabajo para mostrar a tus clientes</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="picture">Imagen</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="picture"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="flex-1"
                        />
                      </div>
                      {previewUrl && (
                        <div className="relative mt-2 rounded-md overflow-hidden">
                          <img
                            src={previewUrl || "/placeholder.svg"}
                            alt="Vista previa"
                            className="w-full h-40 object-cover"
                          />
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-6 w-6 rounded-full"
                            onClick={() => {
                              setPreviewUrl(null)
                              setSelectedFile(null)
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Categoría</Label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="fade">Fade</option>
                        <option value="classic">Clásico</option>
                        <option value="beard">Barba</option>
                        <option value="design">Diseño</option>
                        <option value="modern">Moderno</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Descripción</Label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe el corte, técnica utilizada, etc."
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setUploadDialogOpen(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={handleUpload}>Subir Imagen</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Tabs defaultValue="all" className="bg-white rounded-lg p-1 shadow-sm">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="fade">Fade</TabsTrigger>
                <TabsTrigger value="classic">Clásicos</TabsTrigger>
                <TabsTrigger value="beard">Barba</TabsTrigger>
                <TabsTrigger value="design">Diseños</TabsTrigger>
                <TabsTrigger value="modern">Modernos</TabsTrigger>
              </TabsList>

              {["all", "fade", "classic", "beard", "design", "modern"].map((tab) => (
                <TabsContent key={tab} value={tab} className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {galleryItems
                      .filter((item) => tab === "all" || item.category === tab)
                      .map((item) => (
                        <Card key={item.id} className="border-2 border-primary/10 shadow-md overflow-hidden">
                          <div className="relative aspect-square">
                            <img
                              src={item.imageUrl || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-80 hover:opacity-100"
                              onClick={() => handleDelete(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <CardHeader className="pb-2">
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>Subido el {item.date}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                  </div>

                  {galleryItems.filter((item) => tab === "all" || item.category === tab).length === 0 && (
                    <div className="text-center py-12">
                      <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-image text-muted-foreground"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium">No hay imágenes en esta categoría</h3>
                      <p className="text-muted-foreground mt-1 mb-4">Sube tus primeras fotos para mostrar tu trabajo</p>
                      <Button onClick={() => setUploadDialogOpen(true)} className="bg-primary hover:bg-primary/90">
                        <Plus className="mr-2 h-4 w-4" />
                        Subir Imagen
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

