
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Scale, User, LogOut } from 'lucide-react';

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
          <Scale className="h-6 w-6 text-primary" />
          <span>منصة المحامين</span>
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button variant="ghost" className="gap-2">
                  <User className="h-4 w-4" />
                  لوحة التحكم
                </Button>
              </Link>
              <Button variant="ghost" onClick={logout} className="gap-2">
                <LogOut className="h-4 w-4" />
                تسجيل الخروج
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">تسجيل الدخول</Button>
              </Link>
              <Link to="/register">
                <Button variant="default">إنشاء حساب</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};