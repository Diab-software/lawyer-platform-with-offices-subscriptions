
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, Users, Video, FileText, Shield, DollarSign } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, hsl(221 83% 53% / 0.95) 0%, hsl(215 16% 47% / 0.95) 100%), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              منصة المحامين المتكاملة
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              اربط بين المحامين والموكلين في مكان واحد مع مكاتب إلكترونية متكاملة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="premium" className="text-lg px-8">
                  ابدأ الآن
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                  اعرف المزيد
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              مميزات المنصة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نوفر لك جميع الأدوات اللازمة لإدارة مكتبك القانوني بكفاءة واحترافية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>مكاتب إلكترونية</CardTitle>
                <CardDescription>
                  مكتب خاص لكل محامي مع إدارة كاملة للقضايا والموكلين
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>استشارات فيديو</CardTitle>
                <CardDescription>
                  جلسات استشارية عبر الفيديو مع الموكلين والمتدربين
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-success" />
                </div>
                <CardTitle>إدارة المتدربين</CardTitle>
                <CardDescription>
                  نظام متكامل لتسجيل وإدارة المتدربين وترقيتهم
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>إدارة الوثائق</CardTitle>
                <CardDescription>
                  رفع وإدارة جميع الوثائق والشهادات المطلوبة بأمان
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>التحقق والموافقة</CardTitle>
                <CardDescription>
                  نظام تحقق آمن من الوثائق والموافقة من المشرفين
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle>نظام الدفع</CardTitle>
                <CardDescription>
                  اشتراكات شهرية ودفع آمن للاستشارات القانونية
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              خطط الاشتراك
            </h2>
            <p className="text-lg text-muted-foreground">
              اختر الخطة المناسبة لك
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">موكل</CardTitle>
                <CardDescription>للعملاء الباحثين عن استشارات قانونية</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">مجاني</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    البحث عن محامين
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    حجز استشارات
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    رفع الملفات
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">ابدأ الآن</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                الأكثر شعبية
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">متدرب</CardTitle>
                <CardDescription>للمحامين المتدربين</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">$20</span>
                  <span className="text-muted-foreground">/شهر</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    التسجيل لدى محامي
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    حضور الجلسات
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    إمكانية الترقية
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="premium">ابدأ الآن</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">محامي</CardTitle>
                <CardDescription>للمحامين المعتمدين</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">$50</span>
                  <span className="text-muted-foreground">/شهر</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    مكتب إلكتروني كامل
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    قبول متدربين
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    تحديد أسعار الاستشارات
                  </li>
                </ul>
                <Button className="w-full mt-6">ابدأ الآن</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            جاهز للبدء؟
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            انضم إلى منصة المحامين اليوم وابدأ في تقديم خدماتك القانونية بشكل احترافي
          </p>
          <Link to="/register">
            <Button size="lg" variant="premium" className="text-lg px-8">
              إنشاء حساب مجاني
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};