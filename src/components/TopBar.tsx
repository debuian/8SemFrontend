import { Bell, Search, User } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

const TopBar = () => {
  return (
    <header className={cn(" backdrop-blur-sm sticky top-0 z-30 ")}>
      <div className=" flex items-center justify-between h-16 px-8">
        <div className="flex items-center gap-2 lg:gap-4">
          {/* <div className="relative hidden md:flex items-center h-9 rounded-md px-3 text-muted-foreground focus-within:text-foreground bg-muted/50">
            <Search className="h-4 w-4 mr-2" />
            <Input
              type="search"
              placeholder="Search"
              className="h-9 w-[200px] lg:w-[280px] bg-transparent border-none px-0 py-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground"
            />
          </div> */}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative h-9 w-9">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary animate-pulse" />
          </Button>

          <Avatar className="h-9 w-9 transition-transform duration-200 hover:scale-105">
            <AvatarFallback className="bg-primary/10 text-primary">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
