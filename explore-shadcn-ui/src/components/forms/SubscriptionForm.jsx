import { useSubscriptionForm } from "@/hooks/useSubscriptionForm";
import { getThemeStyles } from "../../utils/styles";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

export const SubscriptionForm = ({ theme = "default", onSuccess }) => {
  const {
    formData,
    isLoading,
    isSubmitted,
    formError,
    validationErrors,
    handleInputChange,
    handlePreferenceChange,
    handleSubmit,
  } = useSubscriptionForm();
  const styles = getThemeStyles(theme);
  return (
    <Card className={styles.card}>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Subscribe to our newsletter
          </CardTitle>
          <CardDescription>
            Stay updated with the latest news and updates.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Success message */}
          {isSubmitted && (
            <Alert className="bg-green-50 text-green-800 border-green-200">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Thanks for subscribing! Check your email for confirmation.
              </AlertDescription>
            </Alert>
          )}

          {/* Error Message */}
          {formError && (
            <Alert className="bg-red-50 text-red-800 border-red-200">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{formError}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className={styles.label}>
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={`${styles.input} ${
                validationErrors.email ? "border-red-500" : ""
              }`}
              disabled={isLoading}
            />
            {validationErrors.email && (
              <span className="text-sm text-red-500">
                {validationErrors.email}
              </span>
            )}
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="weekly" className={styles.label}>
                Weekly Newsletter
              </Label>
              <Switch
                id="weekly"
                checked={formData.preferences.weekly}
                onCheckedChange={(checked) =>
                  handlePreferenceChange("weekly", checked)
                }
                disabled={isLoading}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="promotional" className={styles.label}>
                Promotional Emails
              </Label>
              <Switch
                id="promotional"
                checked={formData.preferences.promotional}
                onCheckedChange={(checked) =>
                  handlePreferenceChange("promotional", checked)
                }
                disabled={isLoading}
              />
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
