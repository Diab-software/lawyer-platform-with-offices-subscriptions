
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">إنشاء حساب جديد</CardTitle>
          <CardDescription>اختر نوع الحساب وأدخل بياناتك</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            صفحة التسجيل - قيد التطوير
          </p>
          <Button className="w-full" disabled>إنشاء حساب</Button>
        </CardContent>
      </Card>
    </div>
  );
};