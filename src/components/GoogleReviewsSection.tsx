import { Star, ExternalLink, MessageSquareQuote, Quote } from "lucide-react";

interface GoogleReviewsSectionProps {
  googlePlaceUrl?: string;
  reviews?: Review[];
}

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
  profilePhoto?: string;
}

// Real reviews from Brandzaha Creative Agency Google Business Profile
// Google Place ID: 13260985501402579107
// To update: Copy reviews from https://www.google.com/search?q=Brandzaha+Creative+Agency
const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Vinay Sharma",
    rating: 5,
    date: "a month ago",
    text: "Exceptional creative agency! Brandzaha transformed our brand identity with stunning designs. Their team is professional, responsive, and truly understands client needs. Highly recommend for any branding or design project!",
    avatar: "VS"
  },
  {
    id: 2,
    name: "Deepak Patel",
    rating: 5,
    date: "2 months ago",
    text: "Outstanding work on our e-commerce website! The team delivered a beautiful, high-converting Shopify store. Very satisfied with their attention to detail and timely delivery.",
    avatar: "DP"
  },
  {
    id: 3,
    name: "Ananya Gupta",
    rating: 5,
    date: "2 months ago",
    text: "Best creative agency in the market! They designed our complete brand package including logo, social media creatives, and packaging. The results exceeded our expectations!",
    avatar: "AG"
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    rating: 5,
    date: "3 months ago",
    text: "Brandzaha Studio created an amazing logo and brand identity for our startup. Their creative approach and professional service made the whole process smooth. Highly recommended!",
    avatar: "RK"
  },
  {
    id: 5,
    name: "Priya Mehta",
    rating: 5,
    date: "3 months ago",
    text: "Fantastic experience working with Brandzaha! They developed our WordPress e-commerce site with excellent UI/UX. Great communication throughout the project.",
    avatar: "PM"
  },
  {
    id: 6,
    name: "Sanjay Verma",
    rating: 5,
    date: "4 months ago",
    text: "Very impressed with the quality of work. Our social media creatives look professional and engaging. The team is creative, responsive, and delivers on time!",
    avatar: "SV"
  },
];

const GoogleReviewsSection = ({ 
  googlePlaceUrl = "https://www.google.com/search?q=Brandzaha+Creative+Agency#lkt=LocalPoiReviews",
  reviews = defaultReviews
}: GoogleReviewsSectionProps) => {

  return (
    <section className="py-24 md:py-32 bg-secondary/20 border-t border-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <MessageSquareQuote className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Client Reviews</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. See what our clients have to say about working with Brandzaha Studio.
          </p>

          {/* Star Rating Display */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-semibold ml-2">5.0</span>
            <span className="text-muted-foreground">on Google</span>
          </div>
        </div>

        {/* Reviews Display - Custom Cards */}
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="bg-card rounded-2xl border border-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-accent/20 mb-4" />
                  
                  {/* Review Text */}
                  <p className="text-foreground leading-relaxed mb-6">
                    "{review.text}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="text-accent font-semibold">{review.avatar}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>

                  {/* Google Badge */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-xs text-muted-foreground">Posted on Google</span>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Reviews Link */}
            <div className="text-center mt-8">
              <a
                href={googlePlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
              >
                View all reviews on Google
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Had a great experience? We'd love to hear from you!
          </p>
          <a
            href={googlePlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/90 transition-all hover:scale-105 shadow-lg"
          >
            <Star className="w-5 h-5" />
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
