import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { ChevronDown, ChevronUp, MenuIcon } from "lucide-react";

export function MobileNav({
  navItems,
}: {
  navItems: Array<{ name: string; href: string; sub?: Array<{ name: string; href: string }> }>;
}) {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex flex-col space-y-4 mt-4">
          {navItems.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between items-center">
                {item.sub && item.sub?.length > 0 ? (
                  <p
                    onClick={() => toggleMenu(item.name)}
                    className="cursor-pointer text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </p>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </a>
                )}
                {item.sub && (
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className="text-gray-600 hover:text-gray-800 p-2"
                  >
                    {openMenus[item.name] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                )}
              </div>
              {item.sub && openMenus[item.name] && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  {item.sub.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={item.href + subItem.href}
                      className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
