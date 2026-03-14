import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onSwitchToSignup: () => void;
}

export function LoginModal({
  open,
  onClose,
  onSuccess,
  onSwitchToSignup,
}: LoginModalProps) {
  const { actor } = useActor();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setLoading(true);
    setError("");
    try {
      const ok = await actor.login(username, password);
      if (ok) {
        toast.success("Welcome back!");
        onSuccess();
      } else {
        setError("Invalid username or password.");
      }
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-md"
        style={{
          background: "oklch(0.09 0.03 220)",
          border: "1px solid oklch(0.25 0.08 185)",
        }}
        data-ocid="login.dialog"
      >
        <DialogHeader>
          <DialogTitle
            className="text-2xl font-display text-center"
            style={{ color: "oklch(0.85 0.1 185)" }}
          >
            Welcome Back
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="login-username">Username</Label>
            <Input
              id="login-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              data-ocid="login.input"
              className="bg-muted border-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password">Password</Label>
            <div className="relative">
              <Input
                id="login-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="bg-muted border-border pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          {error && (
            <p
              className="text-sm text-destructive"
              data-ocid="login.error_state"
            >
              {error}
            </p>
          )}
          <Button
            type="submit"
            className="w-full font-semibold"
            disabled={loading}
            style={{
              background: "oklch(0.65 0.22 185)",
              color: "oklch(0.1 0.02 220)",
            }}
            data-ocid="login.submit_button"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Signing in..." : "Sign In"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="font-medium hover:underline"
              style={{ color: "oklch(0.7 0.2 185)" }}
              data-ocid="login.link"
            >
              Sign Up
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onSwitchToLogin: () => void;
}

export function SignupModal({
  open,
  onClose,
  onSuccess,
  onSwitchToLogin,
}: SignupModalProps) {
  const { actor } = useActor();
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setLoading(true);
    setError("");
    try {
      const ok = await actor.signUp(username, password, email, displayName);
      if (ok) {
        toast.success("Account created! Welcome to Om.ai");
        onSuccess();
      } else {
        setError("Username may already be taken. Please try another.");
      }
    } catch {
      setError("Sign up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-md"
        style={{
          background: "oklch(0.09 0.03 220)",
          border: "1px solid oklch(0.25 0.08 185)",
        }}
        data-ocid="signup.dialog"
      >
        <DialogHeader>
          <DialogTitle
            className="text-2xl font-display text-center"
            style={{ color: "oklch(0.85 0.1 185)" }}
          >
            Create Account
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <div className="space-y-2">
            <Label htmlFor="signup-name">Display Name</Label>
            <Input
              id="signup-name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Your full name"
              required
              className="bg-muted border-border"
              data-ocid="signup.input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-username">Username</Label>
            <Input
              id="signup-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
              className="bg-muted border-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="bg-muted border-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <div className="relative">
              <Input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                required
                className="bg-muted border-border pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          {error && (
            <p
              className="text-sm text-destructive"
              data-ocid="signup.error_state"
            >
              {error}
            </p>
          )}
          <Button
            type="submit"
            className="w-full font-semibold"
            disabled={loading}
            style={{
              background: "oklch(0.65 0.22 185)",
              color: "oklch(0.1 0.02 220)",
            }}
            data-ocid="signup.submit_button"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Creating account..." : "Create Account"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="font-medium hover:underline"
              style={{ color: "oklch(0.7 0.2 185)" }}
              data-ocid="signup.link"
            >
              Sign In
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
