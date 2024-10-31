import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
//import { Separator } from "@/components/ui/separator"
import { Home, Search, Bell, User, BarChart2, Menu, MessageCircle, Repeat2, Heart, Share2 } from "lucide-react"
import Image from "next/image"

export default function SocialPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Seguidos</h1>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-16 lg:w-64 fixed h-screen border-r border-gray-800">
          <nav className="p-2 flex flex-col gap-2">
            <Button variant="ghost" className="justify-start gap-4">
              <Home className="h-5 w-5" />
              <span className="hidden lg:inline">Inicio</span>
            </Button>
            <Button variant="ghost" className="justify-start gap-4">
              <Search className="h-5 w-5" />
              <span className="hidden lg:inline">Explorar</span>
            </Button>
            <Button variant="ghost" className="justify-start gap-4">
              <Bell className="h-5 w-5" />
              <span className="hidden lg:inline">Notificaciones</span>
            </Button>
            <Button variant="ghost" className="justify-start gap-4">
              <User className="h-5 w-5" />
              <span className="hidden lg:inline">Perfil</span>
            </Button>
            <Button variant="ghost" className="justify-start gap-4">
              <BarChart2 className="h-5 w-5" />
              <span className="hidden lg:inline">Estadísticas</span>
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-16 lg:ml-64">
          {/* Post Creation */}
          <div className="p-4 border-b border-gray-800">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-700" />
              <div className="flex-1">
                <Input 
                  placeholder="¿Qué novedades tienes?" 
                  className="bg-transparent border-0 text-white placeholder:text-gray-500 focus-visible:ring-0"
                />
                <div className="flex justify-end mt-2">
                  <Button className="bg-primary hover:bg-primary/90">Publicar</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="p-4 space-y-4">
            <Card className="bg-black border-gray-800">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">vidamrr</span>
                    <span className="text-gray-500">22/10/2024</span>
                  </div>
                  <p>Los disfraces perfectos para Halloween no exis.... Ah perro yo quiero el de backend 😂 #developers #programacion #desarrolloweb</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <Image 
                    src="/images/sample1.jpg" 
                    alt="Backend Developer costume"
                    width={300}
                    height={400}
                    className="rounded-lg"
                  />
                  <Image 
                    src="/images/sample1.jpg" 
                    alt="HTML Developer costume"
                    width={300}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-between mt-4 text-gray-500">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    42
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    1
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Repeat2 className="h-4 w-4 mr-2" />
                    2
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    9
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">alvarofelipech</span>
                    <span className="text-gray-500">15/10/2024</span>
                  </div>
                  <p>9 años emprendiendo <span className="text-primary">@edteamlat</span> con <span className="text-primary">@betoquiroga7</span> y <span className="text-primary">@alexys_lozada</span> Esta saga será más larga que rápidos y furiosos. Porque no hay nada más importante</p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}