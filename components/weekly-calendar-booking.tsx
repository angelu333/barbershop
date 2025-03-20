"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function WeeklyCalendarBooking() {
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [selectedSlot, setSelectedSlot] = useState<{ day: number; time: string } | null>(null)

  // Generar días de la semana a partir de la semana actual
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentWeek)
    date.setDate(date.getDate() - date.getDay() + i)
    return date
  })

  // Generar franjas horarias de 9 AM a 6 PM
  const timeSlots = Array.from({ length: 10 }, (_, i) => {
    const hour = i + 9
    return `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? "PM" : "AM"}`
  })

  // Datos de ejemplo de franjas ya reservadas (no disponibles)
  const bookedSlots = [
    { day: 1, time: "10:00 AM" },
    { day: 1, time: "11:00 AM" },
    { day: 2, time: "9:00 AM" },
    { day: 3, time: "2:00 PM" },
    { day: 4, time: "4:00 PM" },
    { day: 5, time: "10:00 AM" },
  ]

  // Función para verificar si una franja está reservada
  const isSlotBooked = (dayIndex: number, time: string) => {
    return bookedSlots.some((slot) => slot.day === dayIndex && slot.time === time)
  }

  // Función para navegar a la semana anterior
  const previousWeek = () => {
    const prevWeek = new Date(currentWeek)
    prevWeek.setDate(prevWeek.getDate() - 7)
    setCurrentWeek(prevWeek)
  }

  // Función para navegar a la semana siguiente
  const nextWeek = () => {
    const nextWeek = new Date(currentWeek)
    nextWeek.setDate(nextWeek.getDate() + 7)
    setCurrentWeek(nextWeek)
  }

  // Función para manejar la selección de franja
  const handleSelectSlot = (dayIndex: number, time: string) => {
    if (!isSlotBooked(dayIndex, time)) {
      setSelectedSlot({ day: dayIndex, time })
    }
  }

  // Formatear fecha como "Lun 01" o resaltar si es hoy
  const formatDate = (date: Date) => {
    const today = new Date()
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()

    const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
    const day = dayNames[date.getDay()]
    const dayNum = date.getDate()

    return (
      <div className={`text-center ${isToday ? "bg-accent text-accent-foreground rounded-md px-2" : ""}`}>
        <div className="font-medium">{day}</div>
        <div>{dayNum}</div>
      </div>
    )
  }

  return (
    <Card className="p-4 border-2 border-accent/20 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" size="sm" onClick={previousWeek} className="border-accent/20 text-accent-foreground">
          <ChevronLeft className="h-4 w-4 mr-1" /> Semana Anterior
        </Button>
        <div className="font-medium text-accent-foreground">
          {new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(weekDays[0])}
        </div>
        <Button variant="outline" size="sm" onClick={nextWeek} className="border-accent/20 text-accent-foreground">
          Siguiente Semana <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      <div className="grid grid-cols-8 gap-1">
        <div className="sticky left-0 bg-card"></div>
        {weekDays.map((date, i) => (
          <div key={i} className="text-center p-2">
            {formatDate(date)}
          </div>
        ))}

        {timeSlots.map((time, timeIndex) => (
          <>
            <div key={`time-${timeIndex}`} className="sticky left-0 bg-card p-2 text-sm text-muted-foreground">
              {time}
            </div>
            {weekDays.map((_, dayIndex) => {
              const isBooked = isSlotBooked(dayIndex, time)
              const isSelected = selectedSlot?.day === dayIndex && selectedSlot?.time === time

              return (
                <div
                  key={`slot-${dayIndex}-${timeIndex}`}
                  className={`border rounded-md p-1 min-h-[50px] flex items-center justify-center ${
                    isBooked
                      ? "bg-muted text-muted-foreground cursor-not-allowed"
                      : isSelected
                        ? "bg-accent text-accent-foreground border-accent"
                        : "hover:bg-accent/10 cursor-pointer"
                  }`}
                  onClick={() => !isBooked && handleSelectSlot(dayIndex, time)}
                >
                  {isBooked ? (
                    <div className="text-xs font-medium">Ocupado</div>
                  ) : isSelected ? (
                    <div className="text-xs font-medium">Seleccionado</div>
                  ) : (
                    <div className="text-xs font-medium text-muted-foreground">Disponible</div>
                  )}
                </div>
              )
            })}
          </>
        ))}
      </div>
    </Card>
  )
}

