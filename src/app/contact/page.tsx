import ContactForm from '@/components/contact/ContactForm';

export const metadata = {
  title: "연락처 | 개발자 포트폴리오",
  description: "개발자에게 메시지 보내기",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">연락하기</h1>
      <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
        프로젝트 문의, 채용 제안, 또는 그냥 인사하고 싶으시다면 아래 양식을 통해 연락해주세요.
      </p>
      
      <ContactForm />
    </div>
  );
} 