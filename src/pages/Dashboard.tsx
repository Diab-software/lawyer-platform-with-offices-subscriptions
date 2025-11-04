
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8 text-foreground">لوحة التحكم</h1>
        <Card>
          <CardHeader>
            <CardTitle>مرحباً بك</CardTitle>
            <CardDescription>لوحة التحكم قيد التطوير</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              سيتم عرض معلومات الحساب والإحصائيات هنا
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};