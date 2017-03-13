(function() {var implementors = {};
implementors["libc"] = [];
implementors["log"] = ["impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">Error</a> for <a class="struct" href="log/struct.SetLoggerError.html" title="struct log::SetLoggerError">SetLoggerError</a>","impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">Error</a> for <a class="struct" href="log/struct.ShutdownLoggerError.html" title="struct log::ShutdownLoggerError">ShutdownLoggerError</a>",];
implementors["openssl"] = ["impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">Error</a> for <a class="struct" href="openssl/error/struct.ErrorStack.html" title="struct openssl::error::ErrorStack">ErrorStack</a>","impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">Error</a> for <a class="struct" href="openssl/error/struct.Error.html" title="struct openssl::error::Error">Error</a>","impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">Error</a> for <a class="enum" href="openssl/ssl/enum.Error.html" title="enum openssl::ssl::Error">Error</a>","impl&lt;S:&nbsp;<a class="trait" href="https://doc.rust-lang.org/nightly/core/any/trait.Any.html" title="trait core::any::Any">Any</a> + <a class="trait" href="https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html" title="trait core::fmt::Debug">Debug</a>&gt; <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">StdError</a> for <a class="enum" href="openssl/ssl/enum.HandshakeError.html" title="enum openssl::ssl::HandshakeError">HandshakeError</a>&lt;S&gt;","impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">Error</a> for <a class="struct" href="openssl/x509/struct.X509VerifyError.html" title="struct openssl::x509::X509VerifyError">X509VerifyError</a>",];
implementors["protobuf"] = ["impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">Error</a> for <a class="enum" href="protobuf/error/enum.ProtobufError.html" title="enum protobuf::error::ProtobufError">ProtobufError</a>",];
implementors["rust_cast"] = ["impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">StdError</a> for <a class="enum" href="rust_cast/errors/enum.SslError.html" title="enum rust_cast::errors::SslError">SslError</a>","impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">StdError</a> for <a class="enum" href="rust_cast/errors/enum.Error.html" title="enum rust_cast::errors::Error">Error</a>",];
implementors["serde"] = ["impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">Error</a> for <a class="struct" href="serde/de/value/struct.Error.html" title="struct serde::de::value::Error">Error</a>",];
implementors["serde_json"] = ["impl <a class="trait" href="https://doc.rust-lang.org/nightly/std/error/trait.Error.html" title="trait std::error::Error">Error</a> for <a class="struct" href="serde_json/error/struct.Error.html" title="struct serde_json::error::Error">Error</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
